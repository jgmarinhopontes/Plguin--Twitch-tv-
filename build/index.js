(() => {
    "use strict";

    // Importa as funções necessárias do WordPress
    const { createElement } = window.wp.element;
    const { registerBlockType } = window.wp.blocks;
    const { __ } = window.wp.i18n;
    const { InspectorControls, BlockControls, MediaUpload } = window.wp.blockEditor;
    const { PanelBody, TextControl, Button } = window.wp.components;

    // Registra o bloco Seoxblock Twitch Embed
    registerBlockType("seoxblock/seoxblock-twitch-embed", {
        // Título do bloco
        title: __("Seoxblock Twitch Embed", "Seox-block"),

        // Descrição do bloco
        description: __("Embed para Twitch, coloque o nome do seu canal.", "Seox-block"),

        // Categoria do bloco
        category: "Seoxblock",

        // Atributos do bloco
        attributes: {
            channel: { type: "string" },
            height: { type: "string", default: "450" },
            width: { type: "string", default: "100%" },
            previewImage: { type: "string", default: "" } // Atributo para a imagem de prévia.
        },

        // Função de edição do bloco
        edit: ({ attributes, setAttributes, className }) => {
            const { channel, height, width, previewImage } = attributes;

            // Função para selecionar uma imagem
            const onSelectImage = (media) => {
                setAttributes({ previewImage: media.url });
            };

            return [
                // Painel de configuração do bloco
                createElement(InspectorControls, { key: "1" },
                    createElement(PanelBody, { title: __("Configuração da Stream", "Seox-block"), initialOpen: true },
                        // Controles de texto para configurar o canal, altura e largura
                        createElement(TextControl, {
                            type: "text",
                            name: "channel",
                            label: __("Canal da Twitch", "Seox-block"),
                            placeholder: __("Insira somente o nome do seu canal Exemplo: gaules", "Seox-block"),
                            value: channel,
                            onChange: (newChannel) => setAttributes({ channel: newChannel })
                        }),
                        createElement(TextControl, {
                            type: "text",
                            name: "height",
                            label: __("Altura", "Seox-block"),
                            value: height,
                            onChange: (newHeight) => setAttributes({ height: newHeight })
                        }),
                        createElement(TextControl, {
                            type: "text",
                            name: "width",
                            label: __("Largura", "Seox-block"),
                            value: width,
                            onChange: (newWidth) => setAttributes({ width: newWidth })
                        })
                    )
                ),

                // Renderiza a imagem de prévia ou uma mensagem se não houver imagem
                previewImage ? createElement("img", { src: previewImage, className: className, key: "2" }) :
                createElement("p", {}, __("Área da Twitch SEOX.", "Seox-block"))
            ];
        },

        // Função de salvamento do bloco
        save: ({ attributes }) => {
            const { channel, height, width } = attributes;

            // Retorna um iframe com o embed da Twitch
            return createElement("iframe", {
                src: `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`,
                frameBorder: "0",
                allowFullScreen: true,
                height: height,
                width: width
            });
        }
    });
})();
