---  
sidebar_position: 6
title: "Configuração"
---

# Configuração

> _Entenda as configurações necessárias para o BirdoApp funcionar._

O BirdoApp precisa de algumas configurações para funcionar da forma esperada. Na prática essas configurações são pequenos arquivos de texto, escritos no formato `json`, que guardam informações que o BirdoApp precisa consultar durante seu funcionamento.

Basicamente são 3 configurações necessãrias, dependendo da [variante](./variantes) utilizado ou da função que você estiver exercendo no projeto. A seguir a explicação de cada uma delas.

## Configuração de usuário

Essa configuração é necessária para /todas/ as pessoas que utilizarem o BirdoApp, mas se você for trabalhar na variante /standalone/, isso é, sem ser em um projeto de um estúdio que utiliza o BirdoApp, então essa é a unica configuração que você precisa fazer.

Essa configuração acontece na primeira vez que você abre o BirdoApp. Na interface você vai precisar preencher dois campos:

* **Nome**, com seu nome;
* **Versão do Harmony**, com o caminho do executável do Toon Boom Harmony que você utiliza.

Essas informações constarão no arquivo `config.json`, na pasta do BirdoApp.

## Configuração de estúdio

Se você estiver trabalhando para um estúdio, além das informações da [configuração de usuário](#configuração-de-usuário), você vai precisar preencher adicionalmente os seguintes campos:

* ***Local Folder***, o caminho de uma pasta _no seu computador_ onde o BirdoApp vai manter os arquivos em que você irá trabalhar (cenas, rigs, assets...);
* **Nome do estúdio**, com o nome do estúdio;
* **Configuração de projetos**, com o caminho da pasta no servidor, informado pelo estúdio, onde estão configurações de projeto.

Essas informações tambem ficarão guardadas no arquivo `config.json`.

## Configuração de projetos

Essa é uma configuração adicional que precisa ser feita por alguém encarregado do estúdio, como produtores ou supervisores técnico, para elencar os projetos que estarão disponíveis para todos que trabalham no estúdio _e_ como cada projeto está separado (episódios e cenas). Essa configuração é feita quando se abre o BirdoApp no modo desenvolvedor (depois da [configuração de estúdio](#configuração-de-estúdio)) e armazena as seguintes informações para cada projeto:

* **Prefixo do projeto**, 3 letras que identifique o projeto, usado para resolver a nomenclatura dos arquivos desse projeto;
* **Nome do projeto**, seguido por um **subtítulo** e uma **descrição**;
* **Pasta raíz**, com o caminho no servidor onde estão organizados os arquivos desse projeto;
* **Ícone**, imagem do projeto na interface de seleção d eprojetos do BirdoApp.

Essas informações devem ficar em uma pasta permanente do servidor onde todos do estúdio tenham acesso de leitura (a mesma informado no campo _configuração de projetos_ na [configuração de estúdio](#configuração-de-estúdio)). Preferencialmente, apenas produtores e supervisores devem ter acesso _de escrita_ a essa pasta. Mais sobre isso em [gestão de acessos](./gestao-de-acessos).

Detalhes de como fazer a configuração de projetos nas tarefas dos perfis de [produtora(o)](./perfis/produtora/configuracao-projetos) e [técnica(o)/perfis/produtora/configuracao-projetos](./perfis/tecnica/configuracao-projetos).

Depois de criados os projetos, você pode alterar outras opções do projeto. Como os templates, os arquivos usados de base para a criação de cenas e assets. Mais sobre a criação de templates em [_templates_](./templates).