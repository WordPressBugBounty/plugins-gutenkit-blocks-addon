<?php

namespace Gutenkit\Admin\Api;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Helpers\Utils;

class BlocksData {
	use \Gutenkit\Traits\Auth;

	public $prefix  = '';
	public $param   = '';
	public $request = null;

	public function __construct() {
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'gutenkit/v1',
					'blocks',
					array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'action_get_blocks' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init', function () {
			register_rest_route('gutenkit/v1', 'blocks',
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'action_edit_blocks' ),
					'permission_callback' => array( $this, 'check_request' ),
					'args'                => array(
						'blocks' => array(
							'type'     => 'object',
							'required' => true,
						),
					),
					),
				);
			}
		);
	}

	public function action_get_blocks( $request ) {
		$result_data = get_option( 'gutenkit_blocks_list' );

		return array(
			'status'  => 'success',
			'blocks' => $result_data,
			'message' => array(
				'Blocks list has been fetched successfully.',
			),
		);
	}

	public function action_edit_blocks( $request ) {
		$data = Utils::apply_list_update( get_option( 'gutenkit_blocks_list', array() ), $request->get_param( 'blocks' ) );

		update_option( 'gutenkit_blocks_list', $data );

		return array(
			'status'  => 'success',
			'blocks'  => $data,
			'message' => array(
				'Blocks list has been updated successfully',
			),
		);
	}
}
