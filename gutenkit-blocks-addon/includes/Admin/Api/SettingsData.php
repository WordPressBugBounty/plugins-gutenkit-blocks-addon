<?php

namespace Gutenkit\Admin\Api;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Config\SettingsList;
use Gutenkit\Helpers\Utils;

class SettingsData {
	use \Gutenkit\Traits\Auth;

	public $prefix  = '';
	public $param   = '';
	public $request = null;

	public function __construct() {
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'settings',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'action_get_settings' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'settings',
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'action_edit_settings' ),
					'permission_callback' => array( $this, 'check_request' ),
					'args'                => array(
						'settings' => array(
							'type'     => 'object',
							'required' => true,
						),
					),
					),
				);
			}
		);

		// Register the clear_cache endpoint.
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'clear-cache', array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array($this, 'action_clear_cache'),
				'permission_callback' => array( $this, 'check_request' ),
				'args'                => array(
					'transientKey' => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'sanitize_key',
					),
				),
			));
		});
	}

	public function action_get_settings( $request ) {
		$result_data = get_option( 'gutenkit_settings_list' );

		return array(
			'status'  => 'success',
			'settings' => $result_data,
			'message' => array(
				'Settings list has been fetched successfully.',
			),
		);
	}
	public function action_edit_settings( $request ) {
		$data      = Utils::apply_list_update( get_option( 'gutenkit_settings_list', array() ), $request->get_param( 'settings' ) );
		$array_get = update_option( 'gutenkit_settings_list', $data );

		return array(
			'status'   => 'success',
			'settings' => $array_get,
			'message'  => array(
				'Settings list has been Updated successfully.',
			),
		);
	}

	/**
	 * Clears the cache of an API integration setting.
	 *
	 * Only transients that a setting declares as its `transient_key` can be deleted, so the route
	 * cannot be used to clear arbitrary transients belonging to other plugins.
	 *
	 * @param \WP_REST_Request $request The current request.
	 * @return array|\WP_Error
	 */
	public function action_clear_cache( $request ) {
		$transient_key = $request->get_param( 'transientKey' );
		$allowed_keys  = array_column( SettingsList::instance()->get_list(), 'transient_key' );

		if ( ! in_array( $transient_key, $allowed_keys, true ) ) {
			return new \WP_Error( 'gutenkit_invalid_transient', esc_html__( 'Unknown cache key.', 'gutenkit-blocks-addon' ), array( 'status' => 400 ) );
		}

		delete_transient( $transient_key );

		return array(
			'status'  => 'success',
			'message' => array( 'Cache cleared.' ),
		);
	}
	
}
