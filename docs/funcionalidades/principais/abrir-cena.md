---  
sidebar_position: 1  
title: "Abrir Cena"
---

# ABRIR CENA ![](./abrir-cena-icon.png) 
Programa do BirdoApp responsável por abrir as cenas de um projeto. 
Aqui são listadas todas cenas disponíveis na estrutura do servidor do projeto, onde o usuário pode escolher a versão da cena, e abrir localmente uma cópia do arquivo de Harmony para trabalhar.


### BASE DE ARQUIVOS
Para o "Abrir Cena" reconhecer uma cena do projeto, basta haver um arquivo de animatic `.mov` com o padrão de nome de cena na estrutura do Espisódio do projeto no caminho: `01_EPISODIOS\{EP}\03_CENAS\00_RENDER\00_ANIMATIC`.

Os dois arquivos bases para uma cena estar disponível são:
- **`Arquivo .mov de animatic da cena`** : Arquivo de animatic da cena para reconhecer na interface do "Abrir Cena";
- **`SETUP básico de Harmony da Cena`** : Arquivo de Harmony com SETUP básico para ser possível abrir a cena;

:::warning
Se houver um arquivo animatic .mov de uma cena, mas ainda não existir o SETUP básico desta cena, na interface do "Abrir Cena", quando selecionada a cena, aparecerá a mensagem `- SEM SETUP -` no campo de seleção da versão!
:::

:::info
Os arquivos de animatic são versionados, e o que vale para fins de atualizar ou criar um Setup de cena, é sempre a versão mais recente de cada cena.
:::


### Hierarquia das Etapas:
O Programa respeita a seguinte hierarquia das etapas para abrir as cenas:
- 👉 `SETUP` > `ANIM` > `COMP`;

Nessa lógica, a versão buscada no servidor, vai sempre respeitar em qual etapa ela será aberta. 
O tipo de usuário determina automaticamente em qual etapa abrir a cena. Com exceção do usuário **DT**, que pode escolher na interface em qual etapa deseja abrir cada cena selecionada.

:::info
Caso não haja uma versão disponível da cena nesta etapa, o programa busca automaticamente a versão mais recente da etapa anterior para ser aberta. 
:::


> Ex: Usuário de Setup vai automaticamente baixar e enviar cenas para a etapa SETUP, e usuários de animação vão baixar e subir cenas na etapa ANIM!   

### Estrutura de Divisão das Cenas:
O programa respeita uma estrutura separada por Episódios e Cenas para cada etapa.

👉 `Episódio` > `Cena` > `Versão` 

:::info
   É possível configurar o padrão de divisão do projeto na configuração de projetos;
:::


### Copias dos arquivos de cena
👉 **Cópia Servidor**: É onde os arquivos de cena compactados no formato `.zip` são salvos versionados e disponíveis para todos usuários do projeto;

👉 **Cópia Local**: É onde o "Abrir Cenas" descompacta a versão da cena selecionada, e abre para o usuário trabalhar no folder local do projeto configurado pelo usuário;

:::warning
   O que define a versão de uma cena, é quantas versões já existem desta cena no servidor na hora do [ que a cena foi publicada.](../menu/index.mdx#publicar)
   Se o artista abrir a cena, e salvar diferentes versões locais, usando o versionamento de `.xstage` padrão  do Harmony, não siginifica que o BirdoApp vai reconhecer esse versionamento local como o final de cada cena. Ele serve somente para organização local do artista!
:::

👉 Caso a cena selecionada já existir no computador do artista, abre-se a opção de "Abrir arquivo local" na interface, dando a possibilidade de abrir a cena já existente no computador da pessoa.

👉 Se já houver uma versão local descompactada no computador do artista, e for escolhido uma versão do servidor pra abrir por cima, esta cena existente local é copiada no folder local da cena, com a data e horário como _backup_!


### Interface:
![tela do abrir cena](./abrir-cena.png)
- **`Abrir pasta Local`** Abre o diretório local da cena selecionada;
- **`Episódio`** Lista de Episódios do projeto;
- **`Cena`** Lista de cenas do Episódio selecionado no campo `Episódios`;
- **`Versão`** Lista as versões disponíveis para cena selecionada no campo `Cena`;
- **`Abrir arquivo local`** Se já houver uma cópia da cena selecionada no folder local do usuário, esta opção fica disponível, e se marcada, abre a copia já descompactada local da cena;
- **`Última Versão`** Lista informações da Cena selecionada;
- **`Mostrar todas Versões`** Mostra todas versões disponíveis da Cena na lista de cenas, se esta opção estiver desmarcada, será mostrado somente a ultima versão existente da cena;
- **`Abrir Etapa`** Seleciona qual etapa vai abrir a cena. **(Disponível somente para usuário DT)**;
- **`Servidor`** Mostra _status_ do servidor: `online` ou `offline`;
- **`ProgressBar`** Barra de Progresso com informações das ações;
- **`Abrir Cena`** Botão para abrir Cena selecionada;
- **`Fechar`** Fechar interface;
