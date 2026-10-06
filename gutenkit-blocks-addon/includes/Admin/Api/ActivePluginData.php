<?php

namespace Gutenkit\Admin\Api;

class ActivePluginData {
	use \Gutenkit\Traits\Auth;

	public $request = null;

	public function __construct() {
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'active-plugin',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [$this, 'action_get_active_plugin'],
					'permission_callback' => [$this, 'check_request'],
				),
			);
		});

		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'install-active-plugin',
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => [$this, 'install_and_activate_plugin_from_external'],
					'permission_callback' => [$this, 'check_install_permission'],
					'args'                => array(
						'slug' => array(
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => 'sanitize_key',
						),
					),
				),
			);
		});
	}

	public function action_get_active_plugin($request) {
		$plugin_name = $request->get_param('plugin');
		
		$result_data = $this->is_plugin_active($plugin_name.'/'.$plugin_name.'.php');

		return [
			'status'  => 'success',
			'is_active' => $result_data,
			'message' => 'Plugin active data fetched successfully.',
		];
	}

	public function is_plugin_active( $plugin ) {
		return in_array( $plugin, (array) get_option( 'active_plugins', array() ), true ) || $this->is_plugin_active_for_network( $plugin );
	}

	public function is_plugin_active_for_network( $plugin ) {
		if ( ! is_multisite() ) {
			return false;
		}
	
		$plugins = get_site_option( 'active_sitewide_plugins' );
		if ( isset( $plugins[ $plugin ] ) ) {
			return true;
		}
	
		return false;
	}

	/**
	 * Permission callback for the install route.
	 *
	 * @param \WP_REST_Request $request The current request.
	 * @return true|\WP_Error True when the request is allowed, the error otherwise.
	 */
	public function check_install_permission( $request ) {
		return $this->authorize_request( $request, 'install_plugins' );
	}

	/**
	 * Installs a plugin that a GutenKit block declares as its dependency.
	 *
	 * Only the slug comes from the request. The package URL is read from the block list, so a
	 * caller cannot point the download at an arbitrary host or have an arbitrary ZIP unpacked
	 * into the plugins directory.
	 *
	 * @param \WP_REST_Request $request The current request.
	 * @return array|\WP_Error
	 */
	public function install_and_activate_plugin_from_external( $request ) {
		$package = $this->get_dependency_package( $request->get_param( 'slug' ) );

		if ( ! $package ) {
			return new \WP_Error(
				'gutenkit_unknown_dependency',
				esc_html__( 'This plugin is not a GutenKit block dependency.', 'gutenkit-blocks-addon' ),
				array( 'status' => 400 )
			);
		}

		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

		// The same upgrader core's own plugin installer uses: it refuses to overwrite an existing
		// plugin folder and cleans up the download, which a bare download_url() + unzip_file() did not.
		$upgrader = new \Plugin_Upgrader( new \WP_Ajax_Upgrader_Skin() );
		$result   = $upgrader->install( $package );

		if ( true !== $result ) {
			// The upgrader's error text can include remote response details, so it is logged
			// rather than returned.
			if ( is_wp_error( $result ) ) {
				error_log( 'Gutenkit: dependency install failed: ' . $result->get_error_message() );
			}

			return new \WP_Error(
				'gutenkit_install_failed',
				esc_html__( 'The plugin could not be installed.', 'gutenkit-blocks-addon' ),
				array( 'status' => 500 )
			);
		}

		return array( 'success' => true );
	}

	/**
	 * Finds the package URL a block declares for a dependency slug.
	 *
	 * @param string $slug Plugin slug.
	 * @return string|false Package URL, or false when no block declares that slug.
	 */
	private function get_dependency_package( $slug ) {
		foreach ( \Gutenkit\Config\BlockList::instance()->get_list() as $block ) {
			if ( isset( $block['dependency']['slug'], $block['dependency']['url'] ) && $block['dependency']['slug'] === $slug ) {
				return $block['dependency']['url'];
			}
		}

		return false;
	}
}