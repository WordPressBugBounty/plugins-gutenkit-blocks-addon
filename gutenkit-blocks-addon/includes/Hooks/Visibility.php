<?php
namespace Gutenkit\Hooks;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Helpers\Utils;

class Visibility {

	use \Gutenkit\Traits\Singleton;

	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter("gutenkit/collected_css", function($block) {
			$block = $this->add_gutenkit_block_visibility($block, 'visibilityModuleStyles');
			return $block;
		}, 10);
	}

	public function add_gutenkit_block_visibility($block, $module_key) {
		if (!isset($block['blockName']) || !strstr($block['blockName'], 'gutenkit')) {
			return $block;
		}

		$attributes = $block['attrs'];
		$module_css = $attributes[$module_key] ?? [];
		
		//TODO: Remove this backward compatibility in future version
		if(empty($module_css['desktop']) && !empty($attributes['commonBlockHideDesktop'])) {
			$module_css['desktop'] = ".gutenkit-frontend :where(.{$block['attrs']['blockClass']}) { display: none; }";
		}

		if(empty($module_css['tablet']) && !empty($attributes['commonBlockHideTablet'])) {
			$module_css['tablet'] = ".gutenkit-frontend :where(.{$block['attrs']['blockClass']}) { display: none; }";
		}

		if(empty($module_css['mobile']) && !empty($attributes['commonBlockHideMobile'])) {
			$module_css['mobile'] = ".gutenkit-frontend :where(.{$block['attrs']['blockClass']}) { display: none; }";
		}

		$common_css = $attributes['commonStyle'] ?? [];
		$device_list = Utils::get_device_list() ?? [];
		foreach ($device_list as $device) {
			$device = strtolower($device['slug']);
			if (!empty($module_css[$device])) {
				$common_css[$device] .= $module_css[$device];
			}
		}
		
		$block['attrs']['commonStyle'] = $common_css;
		$block['attrs'][$module_key] = null;
		
		return $block;
	}
}
