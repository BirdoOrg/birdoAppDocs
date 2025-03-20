---  
sidebar_position: 2  
title: "Configuração de Projetos" 
---

> _Passo-a-passo da configuração de projetos no BirdoApp para **produtores**._

Todo o trabalho feito através do BirdoApp se enquadra na estrutura `PROJETO` :arrow_forward: `EPISÓDIO` :arrow_forward: `CENA`, conforme visto na [_terminologia_](../../terminologia#projeto). Mas para aparecerem disponíveis para toda a equipe, os projetos, as cenas e os episódios precisam ser adicionados ao BirdoApp.

A interface por onde projetos, episódios e cenas são criados no BirdoApp é acessada executando o próprio BirdoApp no _modo desenvolvedor_. A seguir as etapas necessárias para acessar o modo desenvolvedor e criar projetos, episódios e cenas.

### 1) Acessando o modo desenvolvedor

Siga os passos a seguir para executar o BirdoApp no modo desenvolvedor:

#### a. Abra o programa Powershell;

### b. Execute os comandos a seguir, cada um seguido pela tecla `ENTER`

```powershell
cd $env:APPDATA\BirdoApp\
```

```powershell
.\venv\Scripts\activate.ps1
```

```powershell
python main.py --dev
```

### 2) Criando projetos/episódiso/cenas

Para criar projetos, episódios e cenas você deve digitar o número da opção desejada.

![texto no campo Target nas propriedades do atalho](./configProj04.png)

Para criar um novo projeto, siga as seguintes etapas:

* Tecle `2`, para escolher a opção _Criar Novo Projeto_;
* Defina um prefixo de 3 letras maiúsculas. Ex.: `PRJ`;
* Defina o nome completo do projeto;
* Escreva uma breve descrição sobre o projeto;
* Cole o caminho da pasta raíz do projeto no servidor;
* Opcionalmente, cole o caminho para um arquivo de imagem para servir de ícone do projeto.
 
Em seguida você deve ver mensagens de confirmação e pressionar qualquer tecla para voltar ao menu inicial do Modo Desenvolvedor. Depois disso o projeto vai aparecer disponível para *todos* que tiverem feito [a configuração da variante *de estúdio*](./configuracao-inicial) do BirdoApp.

5) Inicie a interface do BirdoApp e veja o projeto configurado
