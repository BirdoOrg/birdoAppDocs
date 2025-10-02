---  
sidebar_position: 3 
title: "Uploader"
---
import importedHome from './uploader-home.png'
import importedItems from './uploader-items.png'
import importedLogo from './uploader-icon.png'

<div style={{ textAlign: 'left'}}> <img src={importedLogo} width='100' /> </div>
# UPLOADER 
Ferramenta desenvolvida para facilitar o dia a dia da equipe de produção.
Ele recebe arquivos de cenas entregues em .mov (pré-visualizações de vídeo) ou .zip (cenas do Toon Boom Harmony) e cuida de todo o processo de organização.
Com ele, não é necessário renomear ou procurar pastas: o programa aplica automaticamente o padrão de nomes do projeto e envia cada arquivo para o diretório correto.

## Vantagens:
- Agilidade no fluxo de trabalho;
- Consistência nos nomes e na estrutura de pastas;
- Segurança contra erros de organização.

O Uploader transforma uma tarefa repetitiva em um processo simples e confiável, liberando tempo para o que realmente importa: a parte criativa da produção.
<div style={{ textAlign: 'left'}}>
  <img src={importedHome} width='400' />
</div>
> Visualização do programa ao ser aberto

## Funcionamento:
O aplicativo funciona de forma simples e intuitiva: os arquivos são adicionados à interface por meio de arraste e solte(drag-and-drop), passando a aparecer em uma lista vertical no centro da tela que exibe o nome de cada item,o episódio,a cena,a etapa da produção, uma barra de progresso e uma barra de status. Quando o botão **Executar** é acionado, o aplicativo processa os arquivos na ordem em que foram listados, garantindo um fluxo de envio organizado e transparente.
<div style={{ textAlign: 'left'}}>
  <img src={importedItems} width='400' />
</div>
1. Drop down que permite escolher o episódio para todos os arquivos na lista
2. Drop down que permite escolher a etapa da produção para todos os arquivos na lista.
3. Área para arrastar e largar os arquivos. 
4. Botão que executa o envio para o servidor do projeto.
5. Botão que limpa a lista de arquivos caso queira recomeçar.
6. Fecha a aplicação
7. Drop down que permite escolher o episódio para o arquivo específico. Dependendo do nome do arquivo original,o programa tenta inferir o episódio e já escolhe para o usuário. 
8. Campo de numeração da cena. Por padrão esse campo é inativo pois o programa vai tentar inferir o número da cena pelo nome do arquivo.Caso não consiga, o campo vai ser ativado para o usuário preencher.
9. Drop down para seleção de etapa da produção que esse arquivo se encontra.
10. Durante a execução do programa, à medida que o arquivo é preparado e enviado para o servidor,a barra de progresso dele vai aumentar até 100%.
11. Campo que mostra o status do arquivo. Quatro status existem no momento:
12. Ready: Significa que o arquivo está pronto para ser enviado
13. Done: Significa que foi enviado com sucesso
14. In progress: significa que está sendo executado no momento.
15. Error: se algum erro acontecer que impeça a execução completa uma mensagem de erro irá aparecer e o programa seguirá para o próximo arquivo.
16. Botão que permite remover o arquivo da lista.


