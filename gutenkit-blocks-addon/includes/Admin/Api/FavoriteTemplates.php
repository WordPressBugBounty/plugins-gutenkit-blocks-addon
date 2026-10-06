<?php

namespace Gutenkit\Admin\Api;

defined( 'ABSPATH' ) || exit;

/**
 * Favorite Templates for Template Library
 * 
 * @since 1.0.2
 */
class FavoriteTemplates {
	use \Gutenkit\Traits\Auth;

	public $prefix  = '';
	public $param   = '';
	public $request = null;

    /**
     * FavoriteTemplates constructor.
     * 
     * @access public
     * @return void
     */
	public function __construct() {
		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'favorite-templates',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'action_get_favorite_templates' ),
					'permission_callback' => array( $this, 'check_request' ),
					),
				);
			}
		);

		add_action('rest_api_init', function() {
			register_rest_route('gutenkit/v1', 'favorite-templates',
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'action_edit_favorite_templates' ),
					'permission_callback' => array( $this, 'check_request' ),
					'args'                => array(
						'template_list' => array(
							'type'                 => 'object',
							'required'             => true,
							'properties'           => array(
								'id'         => array(
									'type'      => array( 'integer', 'string' ),
									'required'  => true,
									'minLength' => 1,
								),
								'isFavorite' => array(
									'type' => 'boolean',
								),
							),
							'additionalProperties' => false,
						),
					),
					),
				);
			}
		);
	}

    /**
     * Get Favorite Templates
     * 
     * @param array $request
     * @access public
     * @return array
     */
	public function action_get_favorite_templates( $request ) {

		$result_data = get_option( 'gutenkit_favorite_templates' );

		return array(
			'status'  => 'success',
			'data' => $result_data,
			'message' => array(
				'Favorite templates has been fetched successfully.',
			),
		);
	}

    /**
     * Edit Favorite Templates
     * 
     * @param \WP_REST_Request $request
     * @access public
     * @return array
     */
	public function action_edit_favorite_templates( $request ) {

		$data        = $request->get_param( 'template_list' );
		$favorite_id = sanitize_key( (string) $data['id'] );

		if ( '' === $favorite_id ) {
			return new \WP_Error( 'gutenkit_invalid_template_id', esc_html__( 'Invalid template ID.', 'gutenkit-blocks-addon' ), array( 'status' => 400 ) );
		}

		$saved_data = get_option( 'gutenkit_favorite_templates' );
		$saved_data = is_array( $saved_data ) ? $saved_data : array();

		$saved_data[ $favorite_id ]['isFavorite'] = ! empty( $data['isFavorite'] );

		$array_get = update_option( 'gutenkit_favorite_templates', $saved_data );

		return array(
			'status'  => 'success',
			'data'    => $array_get,
			'message' => array(
				'Favorite templates has been Updated successfully.',
			),
		);
	}
}
