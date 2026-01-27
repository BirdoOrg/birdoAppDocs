---  
sidebar_position: 5
title: "Instalação"  
---

# Instalação

## Resumo

Para iniciar a instalação do BirdoApp no Windows, abra o programa Powershell (ou Terminal) e cole a primeira linha a seguir e pressione a tecla `ENTER`.

``` powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Em seguida, cole essa próxima linha e pressione `ENTER` novamente.

``` powershell
IRM -Uri https://raw.githubusercontent.com/BirdoOrg/BirdoApp/refs/heads/main/install.ps1 | IEX
```

Depois disso basta seguir as orientações.

## Isso é seguro?

Sim, esse é o método indicado para instalar o BirdoApp em seu computador e ele é seguro. Copiar comandos encontrados online e executá-los em seu computador pode ser um risco se você não souber o que está acontecendo. Mas você pode conferir a seguir o que cada comando executa em seu computador.

## O que esses comandos fazem com o meu computador?

O primeiro comando, `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, altera a /política de execução de scripts/ em seu computador. Por padrão o Windows impede a execução de scripts, mas depois de digitar ou copiar essa linha no Powershell (ou Terminal) e apertar `ENTER`, scripts que estejam no próprio computador poderão ser executados. Isso é necessário porque a instalação do BirdoApp é feita através de um script.

O segundo comando é separado em duas partes pelo símbolo `|`. A primeira parte, `IRM -Uri https://raw.githubusercontent.com/otmbneto/BirdoApp/refs/heads/config_proj3/install.ps1` baixa o script de instalação e a segunda parte, `IEX` executa o script recebido pela parte anterior. Você pode ver o conteúdo do script de instalação [nesse link](https://raw.githubusercontent.com/otmbneto/BirdoApp/refs/heads/config_proj3/install.ps1), mas basicamente ele realiza em seu computador as seguintes etapas:

1. Downloads dos arquivos do BirdoApp  
2. Descompressão e cópia dos arquivos do BirdoApp para pasta %APPDATA%  
3. Download do programa Ffmpeg  
4. Download e instalação do Python 2.7  
5. Criação de um ambiente virtual Python  
6. Instalação de dependências  
7. Criação de variáveis de ambiente  
8. Atalho do BirdoApp na Área de Trabalho

## Porquê a instalação é feita desse jeito?

Para que o BirdoApp funcione conforme o esperado, é necessário que cada uma das oito etapas descritas anteriormente sejam executadas em seu computador, e o script de instalação tem a responsabilidade de preparar tudo isso. Distribuir o BirdoApp dessa forma permite que o processo de instalação seja atualizado de maneira mais dinâmica. Caso o BirdoApp ganhe uma nova funcionalidade que exija alguma ação durante a instalação, basta alterar o próprio script de instalação para que a versão mais recente fique disponível. Dessa forma, não é necessário gerar um novo instalador executável, por exemplo.

## REQUISITOS MÍNIMOS:
- Windows 10 ou superior(É necessário ter um usuário do Windows SEM caracteres inválidos ou espaço no nome); 
- Harmony 20 ou superior(Algumas ferramentas podem não funcionar corretamente no Harmony 25!);

# # Desinstalação

## Resumo
Este script foi criado para garantir que nenhum arquivo ou configuração desnecessária fique para trás após a remoção do aplicativo.

Para iniciar a desinstalação do BirdoApp no Windows, abra o programa Powershell (ou Terminal) e cole a primeira linha a seguir e pressione a tecla `ENTER`.

``` powershell
cd $env:APPDATA/BirdoApp
```

Em seguida, cole essa próxima linha e pressione `ENTER` novamente.

``` powershell
.\uninstall.ps1
```

Depois disso basta seguir as orientações.

## O que esse comando faz com o meu computador?

Quando você executa o script, ele verifica se o BirdoApp está instalado e, caso esteja, apresenta uma lista de etapas de desinstalação. Depois da sua confirmação, ele executa cada uma delas automaticamente.

As etapas incluem:

1. Remover o Python 2.7 (caso ainda esteja instalado).
2. Apagar o atalho do BirdoApp da sua área de trabalho.
3. Remover uma variável de ambiente especial usada pelo programa (TOONBOOM_GLOBAL_SCRIPT_LOCATION).
4. Limpar o caminho do conversor de vídeos (ffmpeg) da variável de ambiente PATH.
5. Apagar a pasta de instalação do BirdoApp na área de dados do usuário (AppData).
6. Apagar arquivos temporários do BirdoApp que possam estar ocupando espaço no seu computador.