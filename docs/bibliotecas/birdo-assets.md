---  
sidebar_position: 2
title: "BirdoASSET"
description: "Biblioteca de RIGs de todos Assets da produção."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Esta é a biblioteca responsável por gerenciar os _RIGs_ de todos _Assets_ do projeto. Organizado por uma lógica que favorece o versionamento dos _RIGs_, a _BirdoASSET_ é gerenciada pelas feramentas: 
- ["Salvar TPL"](../funcionalidades/menu/index.mdx#salvar-tpl) `Ferramenta que salva itens novos na BirdoASSET`
- ["Importar ASSET"](../funcionalidades/menu/index.mdx#importar-assets) `Interface para acessar a BirdoASSET e selecionar Assets para importar no Harmony`

> A ferramenta ["Salvar TPL"](../funcionalidades/menu/index.mdx#salvar-tpl) está disponível somente para os ["artistas de RIG"](../perfis/rigger.md), através do ["Menu BirdoApp no Harmony"](../funcionalidades/menu/index.mdx) A ferramenta ["Importar ASSET"](../funcionalidades/menu/index.mdx#importar-assets) está disponível para todos arquivos de harmony do projeto (ASSET ou CENA) e acessível também pelo ["Menu BirdoApp no Harmony"](../funcionalidades/menu/index.mdx).

## Estrutura
A estrutura de arquivos do _BirdoASSET_ fica armazenada no caminho `./_tbLib/BirdoASSET/` na raiz do projeto, dividida com uma lógica que favorece a organização por versionamento de cada item.


<Tabs>
  <TabItem value="hierarchy" label="Hierarquia" default>
    A hierarquia desta biblioteca é dividida por:

    [` Tipo de Asset `](#tipos-de-assets) >> [` Nome Raiz do Asset `](#nomenclatura-de-assets) >> [` versão do rig `](./rig.md#versionamento-de-rigs) >> ` Nome da 'variação' do _Asset_ `

    Sendo o "Nome Raiz" o nome principal do _Asset_ que vai definir o valor de index do prefixo, e o "Nome de Variação" que define o nome do _Asset_.

    > Neste exemplo, o personagem "CARLOS" tem o seguinte prefixo `CH005`, e tem duas variações que compartilham o mesmo prefixo. 
    ```
       CH005_CARLOS
       CH005_CARLOS_MOCHILA
       CH005_CARLOS_OCULOS
    ```
  </TabItem>
  <TabItem value="pastas" label="Exemplo">
    Este é um exemplo de estrutura de pastas de uma BirdoASSET configurada para um projeto de exemplo:
 ```  
 BirdoASSETS  
 ├─ Character  
 │  ├─ CH001_Principal 
 │  │  ├─ v01
 │  │  │  ├─ Principal
 │  │  │  │  ├─ DATA
 │  │  │  │  ├─ THUMBS
 │  │  │  │  └─ Principal.v01.zip
 │  │  │  ├─ Princilal_Molhado
 │  │  │  └─ _rigINFO.v01.json
 │  │  ├─ v02
 │  │  │  ├─ Principal_Pequeno
 │  │  │  ├─ Princilal_Molhado
 │  │  │  ├─ Principal_Mochila
 │  │  │  ├─ _rigINFO.v02.json
 │  │  ├─ v03
 │  │  └─ ... 
 │  ├─ CH002_Secundario  
 │  ├─ CH003_Ajudante  
 │  └─ ...  
 ├─ Prop  
 │  ├─ CH001_Livro 
 │  │  ├─ v01
 │  │  │  ├─ Livro
 │  │  │  ├─ Biblia
 │  │  │  ├─ _rigINFO.v01.json
 │  │  ├─ v02
 │  │  │  ├─ LivroAberto
 │  │  │  ├─ Resvistinha
 │  │  │  ├─ LivroPequeno
 │  │  │  ├─ _rigINFO.v02.json
 │  │  ├─ v03
 │  │  └─ ... 
 │  ├─ CH002_Caneca 
 │  ├─ CH003_Caneta  
 │  └─ ...
 └─ ...  
   ```
  > o Arquivo _'\_rigINFO.v01.json'_ armazena informações dos nodes, que definem cada versão de _RIG_
  </TabItem>
</Tabs>


## Tipos de Assets
Os assets são divididos por padrão nas seguintes categorias:

- "Character" (Personagens);
- "Prop" (Objetos de cena);
- *"FX" (Efeitos diversos);
- *"Misc" (quando há mais de um personagem no RIG salvo. Ex: um _RIG_ especial com um personagem na garupa de outro);
- *"Ilustra" (tipo de _RIG_ somente com ilustração em vez de peças separadas)

> ***Nestes tipos de _Asset_ será ignorado o versionamento e tratado sempre como v00!**
:::info
É possível configurar a lista de tipos de assets na configuração do projeto! 
**(INSERIR LINK PARA PAGINA DE CONFIG AQUI!)**
::: 


## Nomenclatura de Assets
A lógica e nomenclatura é definida por:
Prefixo (duas primeiras letras do tipo de asset + index do asset) + Nome do Asset

| | Iniciais do tipo | index do _Asset | Nome do _Asset_ |
|-|:-:|:-:|:-:|
| Ex: | _CH_ | _001_ | _Personagem_ |
> Nome: _CH001_Personagem_

