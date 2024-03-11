import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockPreview } from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
} from '@wordpress/components';
import { registerBlockCategory } from '@wordpress/blocks';

// Verifica se a categoria 'Seoxblock' existe. Se não existir, registra a categoria.
if (!wp.blocks.getBlockCategories().includes('Seoxblock')) {
    registerBlockCategory('Seoxblock', { label: __('Seoxblock', 'Seox-block') });
}

/**
 * Registra o bloco de embed da Twitch.
 *
 * Este bloco permite incorporar vídeos da Twitch em páginas ou postagens.
 *
 * @since 0.0.1
 */
registerBlockType('seoxblock/seoxblock-twitch-embed', {
    // Título do bloco
    title: __( 'Twitch Embed Seox Jose Guilherme', 'Seox-block' ),

    // Descrição do bloco
    description: __(
        'Embed para a Twitch, Coloque o nome do seu canal.',
        'Seox-block'
    ),

    // Categoria do bloco
    category: 'Seoxblock',

    // Atributos do bloco
    attributes: {
        channel: { type: 'string' },
        height: { type: 'string' },
        width: { type: 'string' },
    },

    // Função de edição do bloco
    edit: ( { attributes, setAttributes, className } ) => {
        const { channel, height, width } = attributes;

        return [
            // Controles do bloco na barra lateral
            <InspectorControls key="1">
                <PanelBody
                    title={ __( 'Configuração do Vídeo', 'Seox-block' ) }
                    initialOpen={ true }
                >
                    {/* Controle para configurar a altura do player */}
                    <TextControl
                        type="text"
                        name="height"
                        label={ __( 'Altura do Player', 'Seox-block' ) }
                        value={ height }
                        onChange={ ( newHeight ) =>
                            setAttributes( { height: newHeight } )
                        }
                    />
                    {/* Controle para configurar a largura do player */}
                    <TextControl
                        type="text"
                        name="width"
                        label={ __( 'Largura do Player', 'Seox-block' ) }
                        value={ width }
                        onChange={ ( newWidth ) =>
                            setAttributes( { width: newWidth } )
                        }
                    />
                </PanelBody>
            </InspectorControls>,

            // Visualização do bloco na área de edição
            <div className={ className } key="2">
                {/* Prévia do bloco com uma imagem */}
                <BlockPreview>
                    <img src="https://2t2.ravenstudio.com.br/wp-content/uploads/…/2T2-%E2%80%93-Logo_Producoes-copia-2-150x150.png" alt="Twitch Preview" />
                </BlockPreview>
                {/* Controle para configurar o canal da Twitch */}
                <TextControl
                    type="text"
                    name="channel"
                    label={ __( 'Twitch Channel', 'Seox-block' ) }
                    placeholder={ __( 'Insira somente o nome do seu canal Exemplo: gaules', 'Seox-block' ) }
                    value={ channel }
                    onChange={ ( newChannel ) =>
                        setAttributes( { channel: newChannel } )
                    }
                />
            </div>,
        ];
    },

    // Função de salvamento do bloco
    save: ( { attributes, className } ) => {
        const { channel, height, width } = attributes;

        // Retorna um iframe com o embed da Twitch
        return (
            <div className={ className }>
                <iframe
                    src={
                        'https://player.twitch.tv/?channel=' +
                        channel +
                        '&parent=' +
                        window.location.hostname
                    }
                    title={ __( 'Twitch Embed', 'Seox-block' ) }
                    frameBorder="0"
                    allowFullScreen=""
                    height={ height }
                    width={ width }
                ></iframe>
            </div>
        );
    },
});
