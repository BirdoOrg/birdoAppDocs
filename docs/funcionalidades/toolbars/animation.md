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
Esta ferramenta acessa o banco de reaproveitamento da [_BirdoLibrary_](../../biblioteca/index.mdx##birdo-library) e permite aplicar o banco escolhido no frame atual do RIG selecionado.

**Modo de Uso**: Selecionar qualquer node do RIG, e apertar o botão.

<details>
  <summary>Interface</summary>
  <div style={{ textAlign: 'left'}}> <img src={importedIterfaceBirdoLib} width='600' /> </div>
   - 1. Itens do Banco do Rig selecionado. Cada Rig pode conter mais de um grupo de banco. Os grupos de bancos são divididos por abas nessa área. Nesse exemplo, temos somente o grupo principal do Rig "LUPI";
   - 2. "_Right to Modify": marque esta opção para liberar a edição dos itens (somente disponível para perfis de supervisão);
   - 3. "Filter": esta área em opções para filtrar o tipo de item do banco:
     -"_type_": Tipo de item (animação ou pose)
     -"_Status_": Filtra pelo status do item (aprovado ou esperando aprovação);
     -"_Tags_": adicione diferentes tags para filtrar por palavras chaves os itens;
   - 4. "_Advanced_": Esta área oferece opções avançadas para aplicação do banco:
     -"_Keys Drawings_": aplica tanto _keys_ quanto _drawings_ na timeline;
     -"_Only Drawings_": aplica somente _drawings_ na timeline;
     -"_Only Keys_": aplica somente _keys_ na timeline;
     -"_Frames": dá opção de aplicar intervalo de frames dentro da animação do item (somente abilitado para itens de banco de animação);
   - 5. "_Rig Path_": Caminho de destino do RIG selecionado;	
  
  :::tip
  Deixe o mouse parado em cima do item para ver mais informações e um preview da animação caso seja item de banco de animação.
  :::
</details>

<details>
  <summary>Avançado</summary>

  Para usuários com permissão, é possível editar os itens do banco. Basta clicar com o botão direito que o menu avançado aparece com as opções:
  !["menu avançado"](./animation/BirdoLib-interface-avancado.png)
</details>


### BD_BirdoLibSave !["BD_BirdoLib_Save icon"](./animation/BD_BirdoLib_Save.png)
Use este script para salvar algum banco para a birdoLIB 
(OBS: selecione na time line a pose, ou trecho da animacao pelo grupo do banco do rig!)


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
Selecione qualquer peca de um membro e aperte!
(somente funciona em bracos e pernas)


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

