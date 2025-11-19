---  
sidebar_position: 2  
title: "Assets"
image: "./assets-icon.png"
---
import importedCriar from './assets-criar.png'
import importedAbrir from './assets-abrir.png'


# ASSETS ![](./assets-icon.png)
Interface do BirdoApp para criar ou abrir arquivos de assets do projeto. Arquivos estes, aqui chamados de “stage”, que são arquivos para desenvolver os assets e gerar os templates para library.

- 👉 Cria arquivos 'stage' de asset com o _template_ de Setup definido pela configuração do projeto;

- 👉 Gerencia os arquivos 'stages' na máquina do usuário de RIG. Sendo possível abrir qualquer arquivo de Asset existente no ["folder local"](../../terminologia.md#local-folder) do projeto;

:::info
    É possível modificar o _template_ de Setup usado para criação de asset do projeto. 
    Basta modificar o arquivo "ASSET_template" no folder de configuração do projeto!
:::


### Criar Arquivo
Escolha o tipo e número para definir o prefixo único, e o nome do asset
<div style={{ textAlign: 'left'}}>
  <img src={importedCriar} width='400' />
</div>
- `Tipo` Escolha aqui o tipo de arquivo de Asset;
- `Número` Escolha o número identificador do Asset;
- `Nome` Digite aqui o nome do Asset;
- `Nome do Asset` Display que mostra o nome completo escolhido do Asset em tempo real;
- `Pasta de Destino` Defina onde deseja salvar o arquivo criado \*;
- `Criar Arquivo`  Clique para criar o arquivo com o nome e destino escolhidos;

> Para mais informações sobre o padrão de nome de Assets, leia [aqui](../../bibliotecas/birdo-assets.md#nomenclatura-de-assets)

\* Mantenha o arquivo dentro do folder local do projeto para ter acesso por esta Ferramenta

### Abrir Arquivo
Selecione o arquivo de asset do projeto para abrir. Selecione o nome do arquivo, e esolha a versão do .xstage desejada.
<div style={{ textAlign: 'left'}}>
  <img src={importedAbrir} width='400' />
</div>
- `Atualizar lista de Arquivos` Atualiza a lista de arquivos de Asset encontrados no folder local;
- `Abrir Arquivo Selecionado` Abre o arquivo de Asset selecionado da lista;
> O arquivo Selecionado, mostra abaixo todos arquivos _.xstage_ disponíveis para o Asset;

:::info
aqui são listados todos arquivos com padrão de nome de assets do projeto dentro do folder local. 
Se houver um arquivo com nome duplicado em pastas diferentes, pode confundir na hora de abrir.
:::

:::tip
deixe o mouse parado no item, que aparece uma tooltip com o caminho do arquivo.
:::
