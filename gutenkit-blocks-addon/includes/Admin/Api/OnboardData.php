<?php

namespace Gutenkit\Admin\Api;
use Gutenkit\Admin\Onboard\Onboard;

defined( 'ABSPATH' ) || exit;

class OnboardData {
	public $prefix  = '';
	public $param   = '';
	public $request = null;

	public function __construct() {
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'onboard',
				array(
					'methods'  => \WP_REST_Server::READABLE,
					'callback' => array( $this, 'action_get_onboard' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init',
			function () {
				register_rest_route('gutenkit/v1','onboard',
					array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'post_save_onboard' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init',
			function () {
				register_rest_route('gutenkit/v1','onboard/notice',
					array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'post_save_onboard_notice' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);
	}

	/**
	 * Permission callback shared by every onboard route.
	 *
	 * @param \WP_REST_Request $request The current request.
	 * @return true|\WP_Error True when the request is allowed, the error otherwise.
	 */
	public function check_request( $request ) {
		if ( ! wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return new \WP_Error(
				'gutenkit_rest_nonce_mismatch',
				esc_html__( 'Nonce mismatch.', 'gutenkit-blocks-addon' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		if ( ! is_user_logged_in() || ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error(
				'gutenkit_rest_forbidden',
				esc_html__( 'Access denied.', 'gutenkit-blocks-addon' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		return true;
	}

	public function action_get_onboard( $request ) {
		$status = get_option( Onboard::STATUS );
		$email = get_option( Onboard::EMAIL );

		return array(
			'status'    => 'success',
			'onboard'      => array(
				'status' => $status,
				'email' => $email,
			),
			'message'   => array(
				'Onboard data has been fetched successfully.',
			),
		);
	}

	public function post_save_onboard( $request ) {
		$data    = $request->get_params();
		$onboard = new Onboard();
		return $onboard->submit($data);
	}

	public function post_save_onboard_notice( $request ) {
		$onboard = new Onboard();
		return $onboard->submit_notice( rest_sanitize_boolean( $request->get_param( 'accepted' ) ) );
	}
}
