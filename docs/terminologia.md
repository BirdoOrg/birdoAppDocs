---
sidebar_position: 4
title: "Terminologia"
---

# Terminologia

O BirdoApp foi criado para facilitar produções de animação 2D que utilizem o software Toon Boom Harmony. Trata-se um universo diverso e que conta com uma variedade de técnicas, etapas e processos possíveis e que só é possível graças à dedicação talento de profissionais incríveis (como você!) que contém diferentes habilidades, conhecimentos, competências e atribuições. Portanto, faz sentido apresentar alguns termos que serão utilizados nessa documentação e que também são encontrados durante a utilização do BirdoApp.

## BirdoApp

O BirdoApp na prática é um conjunto de scripts e programas que giram em volta do Toon Boom Harmony _e_ dos processos de projetos de animação 2D. Normalmente ao se referir ao BirdoApp, estamos falando de alguma funcionalidade oferecida, como um atalho para navegar pela nodeview de um rig de personagem, ou a possibilidade de limpar uma cena, compactá-la e subir para um servidor de uma maneira versionada. Todas essas funcionalidades serão cobertas em detalhes no decorrer dessa documentação.

## Projeto

A princípio o BirdoApp foi criado para auxiliar as equipes que trabalhavem em projetos de série de animação 2D de uma ou mais temporadas. Mas qualquer animação feita com o Toon Boom Harmony pode se beneficiar das funcionalidades do BirdoApp: longas metragem, aberturas, vinhetas, peças de publicidade... De uma visão macro, a organização dos projetos pode ser vista da seguinte maneira:

```
PROJETO
 ├─ EPISÓDIO 101
 │  ├─ CENA 0010
 │  ├─ CENA 0002
 │  ├─ CENA 0030
 │  └─ ...
 ├─ EPISÓDIO 102
 │  ├─ CENA 0010
 │  ├─ CENA 0002
 │  ├─ CENA 0030
 │  └─ ...
 └─ ...
```

>A notação de 3 números para definir um episódio indica o número da temporada, no número mais à esquerda, e o número do episódio, nos dois números seguintes. `EP101` que dizer _episódio 01 da primeira temporada_, `EP205`, _quinto episódio da segunda temporada_... 

> A notação de 4 números é o padrão preferido para definir as cenas de forma incremental, utilizando a casa das _dezenas_ (`CENA_0010`, `CENA_0020`, `CENA_0030`...). Isso é feito pois às vezes novas cenas precisam ser acrescentadas. Se isso acontecer, pode-se utilizar a casa das _unidades_, sem comprometer a sequência numérica nem preciar alterar o nome das cenas existentes (uma `CENA_0015` pode passar a existir entre a `CENA_0010` e a `CENA_0020`). 

## Episódios

A primeira divisão de um projeto. Apesar do termo estar ligado à projetos de séries, pode ser usado em outros contextos. _"Episódios"_ podem equivaler à _"Sequências"_ em um projetos de longa metragem, ou _"Peças"_ em uma campanha publicitária. Um projeto de abertura de novela, por exemplo, pode estar dividido em dois episódios: abertura e créditos finais.

Em nomes de pastas e arquivos aparece abreviado como `EP`, mas isso pode ser alterado nas configurações.

## Cenas

O átomo de um episódio, _cenas_ são a menor divisão possível de uma animação. Cada corte (plano) da animação final é uma _cena_ na terminologia do BirdoApp. Na prática, cada cena é um arquivo independente do Toon Boom Harmony em que um animador vai trabalhar.

Em nomes de pastas e arquivos aparece abreviado como `SC` (de _scene_), mas isso pode ser alterado nas configurações.

## Animatic

Versão em baixa fidelidade da animação. Importante para que mesmo antes da etapa de setup já se saiba quais os personagens presentes, como estão dispostos, interações com props e/ou cenário, assim como a duração de cada cena de um episódio.

## Note

Um _note_ é uma solicitação de ajuste, correção, melhoria ou alteração.

## Etapa

Cada um dos passos em que uma cena pode estar. O BirdoApp precisa dessa informação para direcionar o local no servidor onde uma cena será salva, ou definir as especificações de saída dos renders. A saber as etapas são:

### SETUP

Etapa onde o arquivo de Harmony da cena em questão é preparado para que tudo o que o animador precisa para começar a trabalhar já esteja solucionado. A saber: a duração da cena, animatic de referência, os personagens em quadro e os respectivos rigs na nodeview, além de ocasionalmente cenário(s) e movimento de câmera (a depender da pipeline do projeto, cenário e câmera podem ser resolvidos posteriormente).

### ANIM

Etapa que compreende todos os momentos da animação de uma cena até a aprovação: leiaute, poses keyframes, animação cutout, animação frame-a-frame, animação de efeitos, _notes_, ou qualquer outro momento em que a equipe de animação esteja trabalhando na cena.

### COMP

Etapa onde é feito o trabalho de _compositing_, ou a preparação para o _compositing_ caso esse seja feito em outro software que não o Toon Boom Harmony.

## Publicar

Dá-se o nome de _"Publicar uma cena"_ o conjunto das seguintes ações:

  - "Limpar" a cena, removendo elementos não utilizados;
  - Compactar todos os arquivos referentes a uma cena em um único arquivo .zip;
  - Subir arquivo compactado para o servidor nas pasta correspondente do projeto, episódio e etapa correspondente;
  - Eventualmente inscrever a cena numa fila pra que seja renderizada automaticamente (depende de render farm configurada e ativa no servidor).

Todas essas ações são executadas automaticamente pelo script _"Publish"_.

## "Local Folder"

Como visto na *Visão Geral*, o BirdoApp _espelha_ no computador de quem usa a estrutura de pastas e arquivos encontrada no servidor. O termo _"local folder"_ é usado, na configuração de cada projeto, para definir a pasta que naquele computador que vai servir como raíz onde serão baixados do servidor os arquivos daquele projeto.

## Servidor

Armazenamento central dos arquivos do projeto. Pode ser uma pasta na rede ou um serviço de armazenamento em nuvel, como o Nextcloud. É de onde o BirdoApp baixa os arquivos necessários para que se trabalhe no projeto e ele onde sobe os entregáveis de cada etapa.

## Asset

Um arquivo de Toon Boom Harmony que não é uma cena. Normalmente o desig de um prop ou rig de personagem.

## Prop

Elemento de cena em desenho vetorial (mesmo dos personagens).

## Template

No mundo do Toon Boom Harmony um /template/ quer dizer um arquivo do próprio Harmony, normalmente de extensão `.tpl`, que é preparado para ser importado em outro arquivo. Normalmente trata-se de um prop, ou uma animação de banco. Mas no contexto do funcionamento do BirdoApp um template é uma estrutura base de arquivo do Harmony utilizado para gerar novos arquivos de Harmony (cena ou template). O BirdoApp vem com um template padrão para a criação de arquivos `.xstage` e `.tpl`, mas novos templater podem ser criados para atender necessidades específicas de cada projeto. Por exemplo, um projeto que que será distribuído em HDR (alto espectro de cor dinâmico) vai precisar que os templates (arquivos base) contenham configurações específicas de cor.

Quando esse termo for utilizado nessa documentação será seguido de uma menção explícita de sobre o que se está falando: arquivo `.tpl` de reuso no Harmony, ou base para geração de novos arquivos.
