<?php

namespace Gutenkit\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Asks sites running an outdated GutenKit Pro to update it.
 *
 * Pro releases before 2.4.0 call helpers that this plugin is phasing out,
 * so they have to be updated before those helpers are removed.
 *
 * TODO: Remove together with Utils::is_local().
 */
class PluginUpdateNotice {
	use \Gutenkit\Traits\Singleton;

	const MIN_PRO_VERSION = '2.4.0';

	/**
	 * Screens the notice appears on: WP Dashboard, Plugins, GutenKit Dashboard.
	 */
	const SCREENS = array( 'dashboard', 'plugins', 'toplevel_page_gutenkit' );

	public function __construct() {
		add_action( 'admin_notices', array( $this, 'render' ) );
	}

	/**
	 * Whether the notice applies to the current request.
	 *
	 * @return bool
	 */
	private function should_render() {
		if ( ! defined( 'GUTENKIT_PRO_PLUGIN_VERSION' ) || ! current_user_can( 'update_plugins' ) ) {
			return false;
		}

		if ( ! version_compare( GUTENKIT_PRO_PLUGIN_VERSION, self::MIN_PRO_VERSION, '<' ) ) {
			return false;
		}

		$screen = get_current_screen();

		return $screen && in_array( $screen->id, self::SCREENS, true );
	}

	public function render() {
		if ( ! $this->should_render() ) {
			return;
		}

		$on_plugins_screen = 'plugins' === get_current_screen()->id;
		?>
		<div class="notice notice-warning">
			<p>
				<strong><?php esc_html_e( 'GutenKit Pro needs an update.', 'gutenkit-blocks-addon' ); ?></strong>
				<?php
				printf(
					/* translators: 1: installed GutenKit Pro version, 2: minimum required GutenKit Pro version */
					esc_html__( 'You are running version %1$s. Please update GutenKit Pro to version %2$s or later to keep it compatible with GutenKit.', 'gutenkit-blocks-addon' ),
					esc_html( GUTENKIT_PRO_PLUGIN_VERSION ),
					esc_html( self::MIN_PRO_VERSION )
				);
				?>
			</p>
			<?php if ( ! $on_plugins_screen ) : ?>
				<p>
					<a href="<?php echo esc_url( admin_url( 'plugins.php' ) ); ?>" class="button button-primary">
						<?php esc_html_e( 'Update GutenKit Pro', 'gutenkit-blocks-addon' ); ?>
					</a>
				</p>
			<?php endif; ?>
		</div>
		<?php
	}
}
