<?php
/**
 * Nome do Plugin: Seoxblock
 * URI do Plugin: https://www.ravenstudio.com.br
 * Descrição: Blocos da Twitch para o Seoxblock.
 * Versão: 0.0.1
 * Autor: Jose Guilherme Raven Studio
 * Licença: GPL-3.0-or-later
 * URI da Licença: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: Seoxblock
 *
 * @package Seoxblock
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Inicializa os blocos do Seoxblock.
 *
 * Registra os blocos personalizados para a Twitch.
 *
 * @since 1.0.0
 */
function seox_blocks_init() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'seox_blocks_init' );

/**
 * Adiciona a categoria "Seoxblock Twitch Blocks" à lista de categorias de blocos.
 *
 * Adiciona uma nova categoria de blocos para os blocos personalizados da Twitch.
 *
 * @since 1.0.0
 *
 * @param array $categories Lista de categorias de blocos existentes.
 * @return array Lista atualizada de categorias de blocos.
 */
function seox_block_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'Seoxblock',
                'title' => __( 'Seoxblock Twitch Blocks', 'Seox-block' ),
            ],
        ]
    );
}
add_filter( 'block_categories_all', 'seox_block_categories');

/**
 * Adiciona o script de lazy loading.
 *
 * Verifica se a página atual está utilizando o editor Gutenberg e, em caso afirmativo,
 * enfileira o script para lazy loading.
 *
 * @since 1.0.0
 */
function seox_add_lazy_loading_script() {
    // Verifica se a página atual está utilizando o editor Gutenberg
    if (function_exists('has_blocks') && has_blocks()) {
        // Enfileira o script para lazy loading
        wp_enqueue_script('seox-lazy-load', plugin_dir_url( __FILE__ ) . 'lazy-load.js', array(), '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'seox_add_lazy_loading_script');
