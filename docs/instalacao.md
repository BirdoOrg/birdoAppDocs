---
sidebar_position: 2
title: "Instalação"
---

# Instalação

## tl;dr

Para iniciar a instalção do BirdoApp no Windows, abra o programa Powershell (ou Terminal) e cole cada uma das linhas abaixo, pressionando em seguida a tecla `ENTER`.

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
IRM -Uri https://raw.githubusercontent.com/otmbneto/BirdoApp/refs/heads/config_proj3/install.ps1 | IEX
```

Depois disso basta seguir as orientações que aparecerão.

## Isso é seguro?

Sim. Esse é o método indicado para instalar o BirdoApp em seu computador e ele é seguro. Copiar comandos encontrado online e executá-los em seu computador pode ser um risco se você não souber o que está acontecendo. Mas você pode conferir em detalhes o que cada comando executa em seu computador.

## O que esses comandos fazem com o meu computador?

O primeiro comando, `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, altera a /política de execução de scripts/ em seu computador. Por padrão o Windows impede a execução de scripts, mas depois de digitar ou copiar essa linha no Powershell (ou Terminal) e apertar ~ENTER~, scripts que estejam no próprio computador poderão ser executador. Isso é necessário porque a instalação do BirdoApp é feita através de um script.

O segundo comando é separado em duas partes pelo símbolo `|`. A primeira parte, `IRM -Uri https://raw.githubusercontent.com/otmbneto/BirdoApp/refs/heads/config_proj3/install.ps1` baixa o script de instalação e a segunda parte, `IEX` executa o script recebido pela parte anterior. Você pode ver o conteúdo do script de instalação [nesse link](https://raw.githubusercontent.com/otmbneto/BirdoApp/refs/heads/config_proj3/install.ps1), mas basicamente ele realiza em seu computador as seguintes etapas:

1) Downloads dos arquivos do BirdoApp
2) Descompressão e cópia dos arquivos do BirdoApp para pasta %APPDATA%
3) Download do programa Ffmpeg
4) Download e instalação do Python 2.7
5) Criação de um ambiente virtual Python
6) Instalação de dependências
7) Criação de variáveis de ambiente
8) Atalho do BirdoApp na Área de Trabalho

## Porquê a instalação é feita desse jeito?

Para que o BirdoApp possa funcionar como esperado é necessário que cada uma das oito etapas descritas acima seja executada em seu computador e é o script de instalação tem a tarefa de preparar tudo isso. Distribuir o BirdoApp dessa forma permite que o processo de instalação possa ser atualizada mais dinamicamente. Caso o BirdoApp ganhe uma nova funcionalidade, basta fazer uma alteração no script de instalação para que todos que a versão mais atualizada já esteja disponível e não seria necessário gerar um novo instalador executável, por exemplo.
