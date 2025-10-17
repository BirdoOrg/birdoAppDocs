---  
sidebar_position: 3
title: "BirdoLibrary"
description: "Biblioteca de banco de reaproveitamento dos RIGs do projeto."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Esta é a biblioteca responsável por gerenciar os bancos de reaproveitamento dos _RIGs_ da ["_BirdoASSET_"](./birdo-assets.md), podendo ser banco de POSE ou de ANIMAÇÃO. Cada versão de _RIG_ tem um banco diferente. Ela é gerenciada pelas feramentas: 
- ["BD_BirdoLibSave"](../funcionalidades/toolbars/animation.md#bd_birdolibsave-bd_birdolib_save-icon) `Ferramenta que salva itens novos na BirdoLibrary`
- ["BD_BirdoLibrary "](../funcionalidades/toolbars/animation.md#bd_birdolibrary-bd_birdolibrary-icon) `Interface para acessar a BirdoLibrary e selecionar um banco para aplicar num RIG em cena.`

> A ferramenta ["BD_BirdoLibSave"](../funcionalidades/toolbars/animation.md#bd_birdolibsave-bd_birdolib_save-icon) pode ser acessada por qualquer usuário mas contém filtro próprio de perfis para poder editar ou deletar itens do banco.


## Estrutura
A estrutura de arquivos do _BirdoLibrary_ fica armazenada no caminho `./_tbLib/BirdoLib/` na raiz do projeto, com um folder de configuração, e os arquivos dos bancos divididos por versão de cada _RIG_.
<Tabs>
  <TabItem value="hierarchy" label="Hierarquia" default>
    A hierarquia desta biblioteca é dividida por:

    ` Nome do Asset ` >> [`versão do rig`](./rig.md#versionamento-de-rigs)  >> ` Numero do item no padrão 0001`

    > Sendo o "Nome do Asset" o nome principal do _Asset_ **SEM prefixo**, e a "versão do RIG" definida pela estrutura do RIG salvo na ["BirdoASSET"](./birdo-assets.md).

  </TabItem>
  <TabItem value="folders" label="Pastas">
    Este é um exemplo de estrutura de pastas da BirdoLibrary configurada com um personagem e apenas um item de banco:
    ```  
    BirdoLibrary  
    ├─ LUPI  
    │  ├─ v03 
    │  │  ├─ 0001
    │  │  │  ├─ .deleted
    │  │  │  ├─ DATA
    │  │  │  │  ├─ libINFO.json
    │  │  │  │  └─ template_tags.json
    │  │  │  ├─ THUMBS
    │  │  │  └─ 0001.zip
    └─ ...  
    ```
    * A pasta _.deleted_ é onde fica armazenado o material deletado do item.
    * A pasta _DATA_ contém os arquivos: 
      - `libINFO.json`: arquivo json com as informações gerais sobre o item;
      - `template_tags.json`: arquivo json com as informações de tags do item;
    * A pasta _THUMBS_ armazena os arquivos de thumbnails do item.
    * O arquivo '0001.zip' é um aquivo .zip contendo o '.tpl' do item.
  </TabItem>
</Tabs>


## Configuração
Na raiz do _BirdoLibrary_, haverá uma pasta com o nome **\_config**, contendo os arquivos: 
``` 
  _config  
    ├─ _permissions.json
    ├─ _tags.json
    └─ *_tags.json~
```
> \* arquivo de backup do arquivo _tags.json, criado durante a edição das tags por algum usuário.

:::tip
   Caso deseje acrescentar ou modificar algum destes parâmetros da BirdoLibrary, você pode editar diretamente estes arquivos, ou através das [ferramentas da BirdoLibrary](../funcionalidades/toolbars/animation.md)!
:::
<Tabs>
  <TabItem value="permission_file" label="Permissões" default>
    O arquivo de configuração das permissões da _BirdoLibrary_ **_permissions.json**, armazena dados de permissão de uso dos perfis do projeto. Exemplo de configuração padrão de arquivo de permissões:
    ```json
    {
      "status_list": [
        "Pendente",
        "Aprovado",
        "NAO_aprovado"
      ],
      "can_edit": [
        "DT",
        "ANIM_LEAD"
      ]
    }
    ```
    - `"status_list"`: lista de tipos de status de cada item;
    - `"can_edit"`: Lista os tipos de usuários do projeto que podem editar os itens da BirdoLibrary;  
  </TabItem>
  <TabItem value="tags_file" label="Tags">
    Arquivo de configuração das tags da _BirdoLibrary_, **_tags.json**, armazena todas tags disponíveis da _BirdoLibrary_. Exemplo de configuração padrão de tags:
    ```json
    {
      "view": [
        "front",
        "Qfront",
        "profile",
        "Qback",
        "back",
        "downshot"
      ],
      "emotion": [
        "feliz",
        "triste",
        "indiferente",
        "medroso",
        "raiva",
        "assustado",
        "corajoso",
        "curioso"
      ],
      "action": [
        "andando",
        "caminhando",
        "correndo",
        "pulando",
        "voando",
        "tremendo",
        "chutando",
        "socando",
        "parado",
        "antecipando",
        "olhando",
        "perspectiva",
        "dobrado",
        "sentado",
        "acenando",
        "girando"
      ]
    }
    ```
    - `"view"`: lista de possíveis tags de vistas dos RIGS (frente, costas, etc);
    - `"emotion"`: lista de possíveis tags de emoções disponíveis na _BirdoLibrary_;
    - `"action"`: lista de possíveis tags de ações disponíveis na _BirdoLibrary_;
  </TabItem>
</Tabs>
