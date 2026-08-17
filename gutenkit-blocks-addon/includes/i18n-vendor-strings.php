<?php
/**
 * Translation registry for strings that live under `scoped/vendor/`.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * translate.wordpress.org does **not** import the `.pot` file shipped in
 * `languages/`. WordPress.org runs its own string extraction against the plugin
 * source in SVN and builds the GlotPress project from that. Its scanner skips
 * `vendor` paths, so anything under `scoped/vendor/` never becomes translatable on
 * translate.wordpress.org — no matter what the shipped `.pot` contains.
 *
 * The strings below are printed at runtime by `wpmet/utility-package` using *our*
 * text domain. Declaring them here places them in an ordinary plugin path that
 * wp.org's scanner does read, which is the only way to expose them to translators.
 *
 * Runtime behaviour is unaffected: gettext resolves a string by its msgid and
 * domain, not by which file declared it, so the vendored `esc_html__()` calls pick
 * up the translation normally once it exists.
 *
 * DO NOT DELETE without first confirming the strings still appear at
 * https://translate.wordpress.org/projects/wp-plugins/gutenkit-blocks-addon/
 * The local `.pot` is NOT a valid check — `package.json`'s `--include` flag puts
 * them there via a route wp.org does not use.
 *
 * THIS FILE IS NEVER LOADED OR EXECUTED. It exists solely for string extraction.
 *
 * KEEPING IT IN SYNC
 * ------------------
 * Re-check after every `composer install-scoped` / utility-package bump:
 *
 *     grep -rnoE "(__|esc_html__|esc_attr__|_e)\([^)]*'gutenkit-blocks-addon'" scoped/
 *
 * Strings in that package tagged with a *different* domain (`elementskit-lite`) or
 * with no domain at all are deliberately NOT listed here — adding them would not make
 * them translatable, because the runtime lookup uses the domain passed at the call
 * site. Those need an upstream fix in `wpmet/utility-package`.
 *
 * @package Gutenkit
 */

defined( 'ABSPATH' ) || exit;

/**
 * Declares vendored strings for string extraction.
 *
 * Never called.
 *
 * @return void
 */
function gutenkit_vendor_translation_strings() {
	// scoped/vendor/wpmet/utility-package/src/Plugins/Plugins.php
	__( 'Activated', 'gutenkit-blocks-addon' );
	__( 'Activate Now', 'gutenkit-blocks-addon' );
	__( 'Install Now', 'gutenkit-blocks-addon' );
	esc_html__( 'Activate', 'gutenkit-blocks-addon' );
	esc_html__( 'Read Docs', 'gutenkit-blocks-addon' );

	// scoped/vendor/wpmet/utility-package/src/Emailkit/Emailkit.php
	// declares the same three msgids as the first block above.
}
