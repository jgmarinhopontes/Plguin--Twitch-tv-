# Teste WP blocks

## Escopo

Um desenvolvedor deve manter-se atento as constantes mudanças que ocorrem com as ferramentas que ele usa no seu dia à dia, por exemplo o WordPress, em sua versão 5.0 lançada, trouxe um novo editor de blocos ,o Gutemberg. Isso levou os desenvolvedores a aprenderem como usar esse novo recurso e aplicá-lo nos trabalhos existentes da melhor forma.

Este teste visa avaliar o quanto o desenvolvedor conhece sobre o Gutemberg e seus blocos, bem como sua capacidade de aprendizado em novos cenários.

## Cenário fictício

Há muito tempo, a Seox desenvolveu um portal de notícias usando a tecnologia de "tema clássico". Com o tempo, os editores passaram a usar o editor Gutemberg apenas para a edição de texto.

Agora os editores descobriram os recursos de embed do Gutemberg e estão usando para vídeos do YouTube. Gostaram tanto que pediram para a Seox criar embed de algumas redes sociais das quais o Gutemberg não tem na base.

## Requisitos

- O usuário precisa selecionar o bloco no Gutemberg, inserir o link da rede social e visualizar o conteúdo no Gutemberg e no front end.
- Crie um plugin de embed para alguma rede social de sua escolha (como Instagram, Twitch e etc), que não tenha um bloco na base do Gutemberg.
- Fique atento a quebra de layout em diferentes dispositivos e resoluções.
- Fique atento também as boas práticas para otimização de CWV (Core Web Vitals) como lazy load.
- Opcionalmente permita ao editor alguma customização quando ele for inserir ou editar o bloco.

## Limitações

- Use autoload com [Composer / PSR-4](https://getcomposer.org/doc/04-schema.md#psr-4)
- Documente arquivos, classes e funções com o [PHPDoc](https://www.phpdoc.org)
- Desenvolva seguindo o [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)

## Entrega

Faça fork desse repositório e envie-nos um Pull Request quando estiver pronto.
