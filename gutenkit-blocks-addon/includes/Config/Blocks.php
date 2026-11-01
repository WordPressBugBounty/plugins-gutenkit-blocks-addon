<?php

namespace Gutenkit\Config;
use Gutenkit\Helpers\Utils;

defined( 'ABSPATH' ) || exit;

/**
 * Register blocks class
 *
 * @since 0.1.0
 * @return void
 */

class Blocks {

	use \Gutenkit\Traits\Singleton;

	// class initilizer method
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'block_categories_all', array( $this, 'register_block_categories' ), 10, 2 );
		add_filter( 'render_block', array( $this, 'save_element' ), 10, 3 );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		add_filter( 'block_type_metadata', array( $this, 'block_metadata' ), 10 );

		// Load separate core block assets
		if( ! wp_is_block_theme() ) {
			add_filter( 'should_load_separate_core_block_assets', '__return_true' );
		}
	}

	/**
	 * Register the free blocks.
	 * @return void
	 */
	public function register_blocks() {
		global $pagenow;
		
		$is_editor = $pagenow === 'post.php' || $pagenow === 'post-new.php' || $pagenow === 'site-editor.php' || $pagenow === 'widgets.php';
		$args = array(
			'handle' => 'gkit-components',
			'src'    => GUTENKIT_PLUGIN_URL . 'build/gutenkit/components.css',
			'deps'   => array(),
			'ver'    => GUTENKIT_PLUGIN_VERSION,
			'media'  => 'all',
		);

		$this->register_metadata_collection();

		foreach ( \Gutenkit\Config\BlockList::instance()->get_list( 'active' ) as $key => $block ) {
			if ( ( $block['package'] ?? '' ) !== 'free' ) {
				continue;
			}

			$blocks_dir = GUTENKIT_BLOCKS_DIR . $key;

			if ( ! file_exists( $blocks_dir ) ) {
				continue;
			}

			$block_type = register_block_type( $blocks_dir );

			if ( ! $block_type ) {
				continue;
			}

			// WordPress names the editor script after the block (e.g. `gutenkit-heading-editor-script`)
			// and points its translations at the global languages folder; point them at ours instead.
			foreach ( $block_type->editor_script_handles as $handle ) {
				wp_set_script_translations( $handle, 'gutenkit-blocks-addon', GUTENKIT_PLUGIN_DIR . 'languages' );
			}

			if ( $is_editor ) {
				wp_enqueue_block_style( $block_type->name, $args );
			}
		}
	}

	/**
	 * Register the block metadata collection of the blocks folder.
	 *
	 * `wp-scripts build --blocks-manifest` compiles every `block.json` of the build folder into a
	 * single `blocks-manifest.php`. Registering that manifest lets WordPress 6.7+ resolve the
	 * metadata of all blocks from one opcache-friendly file instead of reading, and JSON decoding,
	 * one `block.json` per block. Without a manifest, `register_block_type()` silently falls back
	 * to reading the individual files.
	 *
	 * @since 1.0.2
	 * @return void
	 */
	private function register_metadata_collection() {
		$manifest = GUTENKIT_PLUGIN_DIR . 'build/blocks-manifest.php';

		if ( function_exists( 'wp_register_block_metadata_collection' ) && file_exists( $manifest ) ) {
			wp_register_block_metadata_collection( GUTENKIT_BLOCKS_DIR, $manifest );
		}
	}

	// register block categories
	public function register_block_categories( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'gutenkit',
					'title' => __( 'GutenKit', 'gutenkit-blocks-addon' ),
					'icon'  => 'wordpress',
				),
			),
			$categories
		);
	}

	// admin scripts
	public function admin_scripts( $screen ) {
		$editor_template_library = include_once GUTENKIT_PLUGIN_DIR . 'build/template-library/template-library.asset.php';

		if ( $screen === 'post.php' || $screen === 'post-new.php' || $screen === 'site-editor.php' ) {
			wp_enqueue_script(
				'gutenkit-editor-template-library',
				GUTENKIT_PLUGIN_URL . 'build/template-library/template-library.js',
				$editor_template_library['dependencies'],
				$editor_template_library['version'],
				true
			);

			// Set up script translations
			wp_set_script_translations( 'gutenkit-editor-template-library', 'gutenkit-blocks-addon' );

			// Conditionally enqueue the RTL stylesheet
			if ( is_rtl() ) {
				wp_enqueue_style(
					'gutenkit-editor-template-library-rtl',
					GUTENKIT_PLUGIN_URL . 'build/template-library/template-library-rtl.css',
					array(),
					$editor_template_library['version']
				);
			}else{
				wp_enqueue_style(
					'gutenkit-editor-template-library',
					GUTENKIT_PLUGIN_URL . 'build/template-library/template-library.css',
					array(),
					$editor_template_library['version']
				);
			}
		}
	}

	public function save_element( $block_content, $parsed_block, $instance ) {
		if ( !empty($block_content) && Utils::is_gkit_block($block_content, $parsed_block, 'blockClass') ) {
			$block_content = new \WP_HTML_Tag_Processor($block_content);
			$block_content->next_tag();

			if(empty($block_content->get_attribute('id'))) {
				$block_content->set_attribute('id', "block-" . $parsed_block['attrs']['blockID']);
			}

			if(empty($block_content->get_attribute('data-block'))) {
				$block_content->set_attribute('data-block', $parsed_block['blockName']);
			}

			if(empty($block_content->get_attribute('data-post-id')) && !empty($instance->context['postId'])) {
				$block_content->set_attribute('data-post-id', $instance->context['postId']);
			}
			
			$block_content->add_class($parsed_block['attrs']['blockClass']);
			$block_content->add_class('gutenkit-block');
			
			$before_markup = apply_filters( 'gutenkit/save_element_markup_before', "", $parsed_block );
			$after_markup = apply_filters( 'gutenkit/save_element_markup_after', "", $parsed_block );
			$block_content = apply_filters('gutenkit_save_element_markup', $block_content, $parsed_block, $instance);

			if ( method_exists( $block_content, 'get_updated_html' ) ) {
				$block_content = $block_content->get_updated_html();
			}

			return sprintf('%1$s %2$s %3$s', $before_markup, $block_content, $after_markup);
		}

		return $block_content;
	}

	/**
	 * block_metadata
	 * 
	 * @since 1.0.0
	 */
	public function block_metadata( $metadata ) {
		if (strstr($metadata['name'], 'gutenkit')) {
			// Ensure 'usesContext' is set and is an array
			if (!isset($metadata['usesContext'])) {
				$metadata['usesContext'] = array();
			}
	
			// Merge 'postType' and 'postId' into 'usesContext'
			$metadata['usesContext'] = array_merge($metadata['usesContext'], array('postType', 'postId'));
		}
		return $metadata;
	}
}
