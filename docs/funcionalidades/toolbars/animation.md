---  
sidebar_position: 2
title: "BirdoApp Animation"
description: "Toolbar dedicado as ferramentas de animação."
---
import importedSelDown from './animation/BD_SelectNodeDown.gif'
import importedSelUp from './animation/BD_SelectNodeUp.gif'
import importedIterfaceBirdoLib from './animation/BirdoLib-interface.png'

!["Toolbar de Animação"](./animation/toolbar.png)

:::tip
Adicione a barra **BirdoApp Animation** a janela _Camera View_ para melhor acessar essas ferramentas na hora do uso
::: 


### BD_BirdoLibrary !["BD_BirdoLibrary icon"](./animation/BD_BirdoLibrary.png)
Esta ferramenta acessa o banco de reaproveitamento da [_BirdoLibrary_](../../bibliotecas/birdo-library.md) e permite aplicar o banco escolhido no frame atual do RIG selecionado.

**Modo de Uso**: Selecionar qualquer node do RIG, e apertar o botão.

<details>
  <summary>Interface</summary>
  <div style={{ textAlign: 'left'}}> <img src={importedIterfaceBirdoLib} width='600' /> </div>
   1. Itens do Banco do Rig selecionado. Cada Rig pode conter mais de um grupo de banco. Os grupos de bancos são divididos por abas nessa área. Nesse exemplo, temos somente o grupo principal do Rig "LUPI";
   2. "_Right to Modify_": marque esta opção para liberar a edição dos itens (somente disponível para perfis de supervisão);
   3. "Filter": existem opções para filtrar os itens do banco de dados por:
   - "_type_": que define o tipo de item, como animação ou pose;
   - "_Status_": que permite filtrar de acordo com a situação do item, seja aprovado ou aguardando aprovação;
   - "_Tags_": onde é possível adicionar diferentes palavras-chave para refinar ainda mais a busca;

   4. "_Advanced_": Esta área oferece opções avançadas para aplicação do banco:
   - "_Keys Drawings_": aplica tanto _keys_ quanto _drawings_ na timeline;
   - "_Only Drawings_": aplica somente _drawings_ na timeline;
   - "_Only Keys_": aplica somente _keys_ na timeline;
   - "_Frames_": dá opção de aplicar intervalo de frames dentro da animação do item (somente abilitado para itens de banco de animação);
   
   5. "_Rig Path_": Caminho de destino do RIG selecionado;	
  
  :::tip
  Mantenha o cursor parado sobre um item para acessar detalhes adicionais e uma visualização prévia da animação, se for um item do banco de animação
  :::
</details>


<details>
  <summary>Avançado</summary>

  Ao clicar com botão direito do mouse em um item, as seguintes opções estarão disponíves:

  !["menu avançado"](./animation/BirdoLib-interface-avancado.png)

  - `Select`: Seleciona o item (o mesmo que clicar direto no item);
  - `Favorite`: Seleciona o item como favorito. Fica marcado com uma linha amarela em volta do item; 
  - \*`Change Status`: Muda o status para um dos disponíveis;  
  - \*`Edit Item`: Abre o tpl do item para edição;
  - \*`Delete Item`: deleta o item selecionado do banco da BirdoLibrary;

  \*Disponível apenas para tipos de usuários com permissão de edição;

</details>


### BD_BirdoLibSave !["BD_BirdoLib_Save icon"](./animation/BD_BirdoLib_Save.png)
Esta ferramenta seleciona uma POSE ou ANIMAÇÃO na timeline do grupo de banco do RIG e salva na [_BirdoLibrary_](../../bibliotecas/birdo-library.md).

**POSE:** Fica definido como POSE toda seleção do grupo de banco do RIG na _timeline_ que contenha **APENAS** 1 frame;
**ANIMAÇÃO**: Fica definido como ANIMAÇÃO toda seleção do grupo de banco do RIG na _timeline_ que contenha **MAIS** de 1 frame;

**Modo de Uso:** Selecione o grupo de banco do RIG que deseja salvar, e quantos frames do banco que deseja salvar.

<details>
  <summary>Interface</summary>
  
  !["Save BirdoLibrary interface"](./animation/save-birdolib.png)

  - `Tags`: Aqui é listado todas tags disponíveis da BirdoLibrary para adicionar no item. Dividida por tipos em Abas
  - \*`Add New Tag Type`: Cria um novo tipo de Tag e uma aba nova;
  - \*`Add New Tag`: Cria nova Tag na aba de Tag atual;
  - `Description`: Adicione um texto com descrição para o item salvo;
  - `Info`: Campo com resumo de informações do RIG selecionado para salvar novo item de banco;
  - \*`Set Status`: Define o status do item no ato de salvar;
  
  \*Disponível somente para usuários com permissão para edição de itens da BirdoLibrary!    
  
</details>

### BD_BirdoLineControl !["BD_BirdoLineControl icon"](./animation/BD_BirdoLineControl.png)
Ferramenta para controlar a linha do RIG ou drawing selecionado.
De preferencia usar depois da animacao ja aprovada, e com movimentos de camera definidos!


### BD_FULLAnimation !["BD_FULLAnimation icon"](./animation/BD_FULLAnimation.png)
Ferramenta para posar um mebro específico do *_RIG_ desenhando todas peças em somente um drawing.

**como usar?**
- selecione o drawing do membro que deseja desenhar no FULL;
- aperte normal: ira jogar todos drawings do membro para o Zzero e selecionar o FULL pra vc.
- aperte com shift pressionado: seleciona o node FULL sem zerar os outros desenhos. 

***A estrutura do _RIG_ tem que ter o node _FULL_ montado no membro corretamente para funcionar.**


### BD_Mirror !["BD_Mirror icon"](./animation/BD_Mirror.png)
Ferramenta para copiar a pose do membro selecionado para o membro oposto
Selecione qualquer peça de um membro do RIG (braçou ou perna) para copiar a pose do membro selecionado para o membro oposto.


### BD_RepaintDrawing !["BD_RepaintDrawing icon"](./animation/BD_RepaintDrawing.png)
Use este script para REPINTAR as as linhas e shapes de todos drawings do node selecionado.


### BD_ResetSpecial !["BD_ResetSpecial icon"](./animation/BD_ResetSpecial.png)
Use esse Script para resetar o Drawing Selecionado, 
o Deform e a Peg deste drawing. 
Pressione "Shift" e reseta o grupo inteiro.


### BD_StrokeThicknessControl !["BD_StrokeThicknessControl icon"](./animation/BD_StrokeThicknessControl.png)
Use este e uma ferramenta de drawing, para editar a espessura da linha criando pontos 
conforme configurado na interface.


### BD_Select_Up_Node
Navega na estrutura de nodes subindo na hierarquia e selecionando o parent node da seleção com as seguintes características: 
- Ignora grupos;
- Ignora Node de Static-Transformation;
- Mostra o deform no caminho da hierarquia se houver;
:::tip
Substitua o atalho 'B' por esta ferramenta, e navegue pelos nodes com mais opções.
:::
<div style={{ textAlign: 'left'}}> <img src={importedSelUp} width='500' /> </div>


### BD_Select_Down_Node
Navega na estrutura de nodes descendo na hierarquia com as mesmas funcionalidades do [_BD_Select_Up_Node_](#bd_select_up_node)
:::tip
Substitua o atalho 'V' por esta ferramenta, e navegue pelos nodes com mais opções.
:::
<div style={{ textAlign: 'left'}}> <img src={importedSelDown} width='500' /> </div>

