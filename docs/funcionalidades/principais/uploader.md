---  
sidebar_position: 3 
title: "Uploader"
---
import importedItems from './uploader-items.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# UPLOADER ![](./uploader-icon.png)
Ferramenta desenvolvida para facilitar o dia a dia da equipe de produção, onde é possível fazer o envio (upload) para o servidor de arquivos.
Aceita arquivos de cenas entregues em .mov (pré-visualizações de vídeo) ou .zip (cenas do Toon Boom Harmony) e cuida de todo o processo de organização.
Com ele, não é necessário renomear ou procurar pastas: o programa aplica automaticamente o padrão de nomes do projeto e envia cada arquivo para o diretório correto.


## Vantagens:
👉 Agilidade no fluxo de trabalho;

👉 Consistência nos nomes e na estrutura de pastas;

👉 Segurança contra erros de organização;


O Uploader transforma uma tarefa repetitiva em um processo simples e confiável, 
liberando tempo para o que realmente importa: a parte criativa da produção.


## Funcionamento:
A ferramenta funciona de forma simples e intuitiva: os arquivos são adicionados à interface por meio de "arraste e solte" (drag-and-drop) e aparecem em uma lista vertical no centro da tela.
Essa lista exibe o nome de cada item, o episódio, a cena, a etapa da produção, uma barra de progresso e uma barra de status.

Ao acionar o botão "Executar", o aplicativo processa os arquivos na ordem em que foram listados, garantindo um fluxo de envio organizado e transparente.

### Passo a Passo:
   👉 Arraste um ou mais arquivos (vídeo no formato `.mov` ou arquivo de cena do harmony em formato compactado `.zip`);

   👉 Marque a etapa (`SETUP`, `ANIM` ou `COMP`) de todos itens;

   👉 Informe os números das cenas de cada item (com o botão `Pegar Número de Cenas` ou manualmente diretamente no campo `Cena` de cada item);

   👉 Confira os números das cenas se respeitam o padrão do projeto e aperte `Executar`;

   👉 Acompanhe os logs no terminal;


### Interface
> Exemplo de itens adicionados na interface! <div style={{ textAlign: 'left'}}> <img src={importedItems} width='625' /></div>

<Tabs>
  <TabItem value="geral" label="Geral" default>
    - `Episodio` Drop down que permite escolher o episódio para **TODOS** os arquivos na lista;
    - `Etapa` Drop down que permite escolher a etapa da produção para **TODOS** os arquivos na lista;
    - `Pegar Número de Cenas` Procura o número das cenas em cada item, e preenche automaticamente o campo `Cena` dos mesmos;
    - `Executar` Botão que executa o envio para o servidor do projeto;
    - `Limpar` Botão que limpa a lista de arquivos caso queira recomeçar;
    - `Fechar`  Fecha a aplicação;
  </TabItem>
  <TabItem value="itens" label="Itens">
    -`Drop Down` Permite escolher o episódio para um arquivo específico. O programa tenta inferir automaticamente o episódio com base no nome do arquivo;
    - `Cena` Campo de numeração da cena. Por padrão esse campo é inativo pois o programa vai tentar inferir o número da cena pelo nome do arquivo. Caso não consiga, o campo vai ser ativado para o usuário preencher;
    - `ProgressBar` Mostra o andamento do preparo e envio do arquivo (0 a 100%);
    - `Status` Campo que mostra o status do arquivo. Quatro status existem no momento:
        * Ready: Arquivo pronto para envio;
        * In progress: Envio em andamento;
        * Done: Envio concluído com sucesso;
        * Error: Erro durante o processo; uma mensagem de erro é exibida e o programa avança para o próximo arquivo;
    - `X` Botão que permite remover o arquivo da lista;
  </TabItem>
</Tabs>


:::info
   Ao subir arquivos de cena de Harmony com o _Uploader_, se o script reconhecer o _node_ de _Animatic_ na cena, ele vai gerar um mov atualizado e versionado na estrutura do projeto.
:::