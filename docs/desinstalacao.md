---  
sidebar_position: 9  
title: "Desinstalação"  
---

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