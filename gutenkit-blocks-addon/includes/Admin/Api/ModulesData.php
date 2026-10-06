<?php 

namespace Gutenkit\Admin\Api;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Helpers\Utils;

class ModulesData {
	use \Gutenkit\Traits\Auth;

	public $prefix  = '';
	public $param   = '';
	public $request = null;

	public function __construct() {
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'modules', 
				array(
					'methods'  => \WP_REST_Server::READABLE,
					'callback' => array( $this, 'action_get_modules' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'modules',
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'action_edit_modules' ),
					'permission_callback' => array( $this, 'check_request' ),
					'args'                => array(
						'modules' => array(
							'type'     => 'object',
							'required' => true,
						),
					),
					),
				);
			}
		);
	}

	public function action_get_modules( $request ) {
		$result_data = get_option( 'gutenkit_modules_list' );

		return array(
			'status'    => 'success',
			'modules'      => $result_data,
			'message'   => array(
				'Modules list has been fetched successfully.',
			),
		);
	}

	public function action_edit_modules( $request ) {
		$data      = Utils::apply_list_update( get_option( 'gutenkit_modules_list', array() ), $request->get_param( 'modules' ) );
		$array_get = update_option( 'gutenkit_modules_list', $data );

		return array(
			'status'  => 'success',
			'modules' => $array_get,
			'message' => array(
				'Modules list has been Updated successfully.',
			),
		);
	}
}
