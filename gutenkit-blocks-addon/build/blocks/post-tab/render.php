<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
$attributes = $attributes;
$block_id = $attributes['blockID'];
$align_class = isset($attributes['align']) ? 'align' . $attributes['align'] : '';
$selected_post_type = !empty($attributes['selectedPostType']) ? $attributes['selectedPostType'] : 'post';
$selected_taxonomy_raw = !empty($attributes['selectedTaxonomy']) ? $attributes['selectedTaxonomy'] : 'category';
$selected_categories_raw = !empty($attributes['selectedCatagories']) ? $attributes['selectedCatagories'] : (!empty($attributes['selectedCategories']) ? $attributes['selectedCategories'] : array());
$post_count = isset($attributes['postCount']) ? (int)$attributes['postCount'] : 3;
$link_archive = isset($attributes['linkArchive']) ? (bool)$attributes['linkArchive'] : false;
$event_type = !empty($attributes['eventType']) ? $attributes['eventType'] : 'mouseenter';
$enable_crop_title = isset($attributes['enableCropTitle']) ? (bool)$attributes['enableCropTitle'] : false;
$crop_title_words = !empty($attributes['numberOfWordsTitle']) ? $attributes['numberOfWordsTitle'] : 5;
$categories = [];
$placeholder = GUTENKIT_PLUGIN_URL . 'assets/images/placeholder.jpg';

$selected_taxonomy = 'category';
if (is_string($selected_taxonomy_raw)) {
    $selected_taxonomy = $selected_taxonomy_raw;
} else if (is_array($selected_taxonomy_raw) && !empty($selected_taxonomy_raw)) {
    $first = reset($selected_taxonomy_raw);
    if (is_array($first) && isset($first['value'])) {
        $selected_taxonomy = $first['value'];
    } else if (is_string($first)) {
        $selected_taxonomy = $first;
    }
}

$taxonomies = get_object_taxonomies($selected_post_type, 'names');
$exclude_taxonomies = array('product_visibility', 'product_type', 'post_format');
$taxonomies = array_diff($taxonomies, $exclude_taxonomies);
$taxonomies = array_filter($taxonomies, function($tax) {
    return strpos($tax, 'wp_') !== 0;
});
$taxonomies = array_values($taxonomies);

if (empty($taxonomies)) {
    $selected_taxonomy = '';
} else if (!in_array($selected_taxonomy, $taxonomies, true)) {
    $selected_taxonomy = in_array('category', $taxonomies, true) ? 'category' : $taxonomies[0];
}

$selected_cat_ids = array();
if (is_array($selected_categories_raw)) {
    foreach ($selected_categories_raw as $item) {
        if (is_array($item) && isset($item['value'])) {
            $selected_cat_ids[] = $item['value'];
        } else if (is_object($item) && isset($item->value)) {
            $selected_cat_ids[] = $item->value;
        } else if (is_scalar($item)) {
            $selected_cat_ids[] = $item;
        }
    }
}

$is_all = empty($selected_cat_ids) || in_array('all', $selected_cat_ids, true);

if (!empty($selected_taxonomy) && in_array($selected_taxonomy, $taxonomies, true)) {
    $term_args = array(
        'taxonomy'   => $selected_taxonomy,
        'number'     => 100,
        'hide_empty' => false,
    );
    if (!$is_all && !empty($selected_cat_ids)) {
        $term_args['include'] = $selected_cat_ids;
        $term_args['orderby'] = 'include';
    }
    $terms = get_terms($term_args);
    if (!empty($terms) && !is_wp_error($terms)) {
        if ($is_all) {
            $terms = array_values(array_filter($terms, function($t) {
                $slug = is_object($t) ? strtolower($t->slug) : '';
                $name = is_object($t) ? strtolower($t->name) : '';
                return $slug !== 'uncategorized' && $name !== 'uncategorized';
            }));
        }
        if (!empty($terms)) {
            $categories = $terms;
        }
    }
}

if (empty($categories)) {
    $categories = array(
        array(
            'value'         => 'all',
            'title'         => __('All', 'gutenkit-blocks-addon'),
            'label'         => __('All', 'gutenkit-blocks-addon'),
            'taxonomy'      => !empty($selected_taxonomy) ? $selected_taxonomy : 'all',
            'taxonomyLabel' => __('All', 'gutenkit-blocks-addon')
        )
    );
}

$has_tabs = !empty($categories);

if (!$has_tabs) {
    $post_status = ($selected_post_type === 'attachment') ? 'inherit' : 'publish';
    $post_items = get_posts(array('post_type' => $selected_post_type, 'posts_per_page' => $post_count, 'post_status' => $post_status));
}
?>

<div <?php echo wp_kses_post(Gutenkit\Helpers\Utils::get_dynamic_block_wrapper_attributes($block)) ?>>
    <div class="gkit-post-tab post--tab" data-event="<?php echo esc_attr($event_type); ?>">
        <?php if ($has_tabs) : ?>
            <div class="tab-header">
                <div class="tab__list">
                    <?php foreach ($categories as $index => $cat) :
                        if (is_array($cat)) {
                            $cat_ID = isset($cat['value']) ? $cat['value'] : 0;
                            $cat_name = isset($cat['title']) ? $cat['title'] : (isset($cat['label']) ? $cat['label'] : '');
                            $taxonomy = !empty($cat['taxonomy']) ? $cat['taxonomy'] : 'category';
                        } else if (is_object($cat)) {
                            $cat_ID = $cat->term_id;
                            $cat_name = $cat->name;
                            $taxonomy = $cat->taxonomy;
                        }

                        $active_class = ($index == 0) ? 'active' : '';
                        $term_link = get_term_link((int)$cat_ID, $taxonomy);
                        if (is_wp_error($term_link)) {
                            $term_link = get_term_link((int)$cat_ID);
                            if (is_wp_error($term_link)) {
                                $term_link = '#';
                            }
                        }

                        if ($link_archive === true) { ?>
                            <a href="<?php echo esc_url($term_link); ?>" target="_blank" class="<?php echo esc_attr($active_class); ?> tab__list__item" data-category-id="<?php echo esc_attr($cat_ID); ?>">
                                <?php echo esc_html($cat_name); ?>
                            </a>
                        <?php } else {  ?>
                            <span class="<?php echo esc_attr($active_class); ?> tab__list__item" data-category-id="<?php echo esc_attr($cat_ID); ?>">
                                <?php echo esc_html($cat_name); ?>
                            </span>
                    <?php };
                    endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
        <div class="gkit--tab__post__details tab-content">
            <?php if ($has_tabs) :
                foreach ($categories as $index => $cat) :
                    if (is_array($cat)) {
                        $cat_ID = isset($cat['value']) ? $cat['value'] : 0;
                        $taxonomy = !empty($cat['taxonomy']) ? $cat['taxonomy'] : 'category';
                    } else if (is_object($cat)) {
                        $cat_ID = $cat->term_id;
                        $taxonomy = $cat->taxonomy;
                    }

                    $query = array(
                        'post_type'      => $selected_post_type,
                        'post_status'    => ($selected_post_type === 'attachment') ? 'inherit' : 'publish',
                        'posts_per_page' => $post_count,
                    );
                    if ($cat_ID !== 'all') {
                        $query['tax_query'] = array(
                            array(
                                'taxonomy' => $taxonomy,
                                'field'    => 'term_id',
                                'terms'    => $cat_ID,
                            ),
                        );
                    }

                    $active_class = ($index == 0) ? 'active' : '';
            ?>

                    <div class="tab-item <?php echo esc_attr($active_class); ?>" data-category-id="<?php echo esc_attr($cat_ID); ?>">
                        <?php $xs_query = new \WP_Query($query);
                        if ($xs_query->have_posts()) :
                            while ($xs_query->have_posts()) :
                                $xs_query->the_post();
                                if ($selected_post_type === 'attachment') {
                                    $img_src = wp_get_attachment_image_src(get_the_ID(), 'thumbnail');
                                    $thumbnail_url = $img_src ? $img_src[0] : wp_get_attachment_url(get_the_ID());
                                } else {
                                    $thumbnail_url = has_post_thumbnail() ? get_the_post_thumbnail_url() : $placeholder;
                                }
                        ?>
                                <div class="tab__post__single--item">
                                    <div class="tab__post__single--inner">
                                        <a href="<?php echo esc_url(get_the_permalink()); ?>" class="tab__post--header" aria-label="url">
                                            <?php // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?>
                                            <img src="<?php echo esc_url($thumbnail_url); ?>" alt="placeholder">
                                        </a>
                                        <h3 class="tab__post--title">
                                            <a href="<?php echo esc_url(get_the_permalink()); ?>">
                                                <?php
                                                if ($enable_crop_title) {
                                                    echo esc_html(wp_trim_words(get_the_title(), $crop_title_words));
                                                } else {
                                                    echo esc_html(get_the_title());
                                                } ?>
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                        <?php endwhile;
                        else : ?>
                            <p class="tab-status-message"><?php esc_html_e('No data found.', 'gutenkit-blocks-addon'); ?></p>
                        <?php endif;
                        wp_reset_postdata(); ?>
                        <div class="clearfix"></div>
                    </div>
                <?php endforeach;
            else : ?>
                <div class="tab-item active">
                    <?php if (!empty($post_items)) : ?>
                        <?php foreach ($post_items as $item) :
                            if ($selected_post_type === 'attachment') {
                                $img_src = wp_get_attachment_image_src($item->ID, 'thumbnail');
                                $thumbnail_url = $img_src ? $img_src[0] : wp_get_attachment_url($item->ID);
                            } else {
                                $thumbnail_url = has_post_thumbnail($item->ID) ? get_the_post_thumbnail_url($item->ID) : $placeholder;
                            }
                        ?>
                            <div class="tab__post__single--item">
                                <div class="tab__post__single--inner">
                                    <a href="<?php echo esc_url(get_permalink($item->ID)); ?>" class="tab__post--header" aria-label="url">
                                        <img src="<?php echo esc_url($thumbnail_url); ?>" alt="placeholder">
                                    </a>
                                    <h3 class="tab__post--title">
                                        <a href="<?php echo esc_url(get_permalink($item->ID)); ?>">
                                            <?php echo esc_html($enable_crop_title ? wp_trim_words(get_the_title($item->ID), $crop_title_words) : get_the_title($item->ID)); ?>
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php else : ?>
                        <p class="tab-status-message"><?php esc_html_e('No data found.', 'gutenkit-blocks-addon'); ?></p>
                    <?php endif; ?>
                    <div class="clearfix"></div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>