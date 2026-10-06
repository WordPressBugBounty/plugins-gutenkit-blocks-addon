<?php

namespace Gutenkit\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * REST permission callbacks shared by the admin API routes.
 *
 * Authorization belongs in `permission_callback`, not in the route handler: a handler that
 * re-checks the request itself sits behind a route that declares itself public, and a failed
 * check comes back as HTTP 200.
 *
 * @package Gutenkit\Traits
 */
trait Auth {

	/**
	 * Permission callback for routes that change or expose plugin settings.
	 *
	 * @param \WP_REST_Request $request The current request.
	 * @return true|\WP_Error True when the request is allowed, the error otherwise.
	 */
	public function check_request( $request ) {
		return $this->authorize_request( $request, 'manage_options' );
	}

	/**
	 * Verifies the REST nonce and the given capability.
	 *
	 * @param \WP_REST_Request $request    The current request.
	 * @param string           $capability Capability the current user must hold.
	 * @return true|\WP_Error True when the request is allowed, the error otherwise.
	 */
	protected function authorize_request( $request, $capability ) {
		if ( ! wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return new \WP_Error(
				'gutenkit_rest_nonce_mismatch',
				esc_html__( 'Nonce mismatch.', 'gutenkit-blocks-addon' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		if ( ! is_user_logged_in() || ! current_user_can( $capability ) ) {
			return new \WP_Error(
				'gutenkit_rest_forbidden',
				esc_html__( 'Access denied.', 'gutenkit-blocks-addon' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		return true;
	}
}
