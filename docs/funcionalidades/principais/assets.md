---  
sidebar_position: 2  
title: "Assets"
image: "./assets-icon.png"
---
import importedCriar from './assets-criar.png'
import importedAbrir from './assets-abrir.png'
import importedLogo from './assets-icon.png'


<div style={{ textAlign: 'left'}}> <img src={importedLogo} width='100' /> </div>
# ASSETS
Interface do BirdoApp para criar ou abrir arquivos de assets do projeto. Arquivos estes, aqui chamados de “stage”, que são arquivos para desenvolver os assets e gerar os templates para library.

## CRIAR ARQUIVO
Escolha o tipo e número para definir o prefixo único, e o nome do asset
<div style={{ textAlign: 'left'}}>
  <img src={importedCriar} width='400' />
</div>

## ABRIR ARQUIVO
Selecione o arquivo de asset do projeto para abrir. Selecione o nome do arquivo, e esolha a versão do .xstage desejada.
<div style={{ textAlign: 'left'}}>
  <img src={importedAbrir} width='400' />
</div>

:::info
aqui são listados todos arquivos com padrão de nome de assets do projeto dentro do folder local. 
Se houver um arquivo com nome duplicado em pastas diferentes, pode confundir na hora de abrir.
:::

:::tip
deixe o mouse parado no item, que aparece uma tooltip com o caminho do arquivo.
:::
