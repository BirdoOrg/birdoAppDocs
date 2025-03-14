"use strict";(self.webpackChunkbirdo_app_docs=self.webpackChunkbirdo_app_docs||[]).push([[412],{1357:(o,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"perfis/produtora/configuracao-projetos","title":"Configura\xe7\xe3o de Projetos","description":"Passo-a-passo da configura\xe7\xe3o de projetos no BirdoApp para **produtores**.","source":"@site/docs/perfis/produtora/configuracao-projetos.md","sourceDirName":"perfis/produtora","slug":"/perfis/produtora/configuracao-projetos","permalink":"/birdoAppDocs/build/docs/perfis/produtora/configuracao-projetos","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Configura\xe7\xe3o de Projetos"},"sidebar":"tutorialSidebar","previous":{"title":"Configura\xe7\xe3o Inicial","permalink":"/birdoAppDocs/build/docs/perfis/produtora/configuracao-inicial"},"next":{"title":"T\xe9cnico(a)","permalink":"/birdoAppDocs/build/docs/category/t\xe9cnicoa"}}');var n=a(4848),s=a(8453);const i={sidebar_position:2,title:"Configura\xe7\xe3o de Projetos"},d=void 0,c={},t=[{value:"1) Acessando o modo desenvolvedor",id:"1-acessando-o-modo-desenvolvedor",level:3},{value:"a. Copiando o comando do <em>launcher</em>",id:"a-copiando-o-comando-do-launcher",level:4},{value:"b. Complementando e executando o comando",id:"b-complementando-e-executando-o-comando",level:4},{value:"2) Criando projetos/epis\xf3diso/cenas",id:"2-criando-projetosepis\xf3disocenas",level:3}];function p(o){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.em,{children:["Passo-a-passo da configura\xe7\xe3o de projetos no BirdoApp para ",(0,n.jsx)(e.strong,{children:"produtores"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Todo o trabalho feito atrav\xe9s do BirdoApp se enquadra na estrutura ",(0,n.jsx)(e.code,{children:"PROJETO"})," ","\u25b6\ufe0f"," ",(0,n.jsx)(e.code,{children:"EPIS\xd3DIO"})," ","\u25b6\ufe0f"," ",(0,n.jsx)(e.code,{children:"CENA"}),", conforme visto na ",(0,n.jsx)(e.a,{href:"../../terminologia#projeto",children:(0,n.jsx)(e.em,{children:"terminologia"})}),". Mas para aparecerem dispon\xedveis para toda a equipe, os projetos, as cenas e os epis\xf3dios precisam ser adicionados ao BirdoApp."]}),"\n",(0,n.jsxs)(e.p,{children:["A interface por onde projetos, epis\xf3dios e cenas s\xe3o criados no BirdoApp, quando executado no ",(0,n.jsx)(e.em,{children:"modo desenvolvedor"}),". A seguir as etapas necess\xe1rias para acessar o modo desenvolvedor e criar projetos, epis\xf3dios e cenas."]}),"\n",(0,n.jsx)(e.h3,{id:"1-acessando-o-modo-desenvolvedor",children:"1) Acessando o modo desenvolvedor"}),"\n",(0,n.jsxs)(e.h4,{id:"a-copiando-o-comando-do-launcher",children:["a. Copiando o comando do ",(0,n.jsx)(e.em,{children:"launcher"})]}),"\n",(0,n.jsxs)(e.p,{children:["Normalmente o BirdoApp \xe9 executado a partir do \xedcone que \xe9 criado na desktop durante a instala\xe7\xe3o. Esse \xedcone executa um comando e para executar no modo desenvolvedor esse comando requer um complemento. Clique com o bot\xe3o direito do mouse no \xedcone do BirdoApp na desktop e escolha a op\xe7\xe3o ",(0,n.jsx)(e.em,{children:"Propriedades"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"op\xe7\xe3o Propriedades no menu do \xedcone do BirdoApp",src:a(8160).A+"",width:"341",height:"446"})}),"\n",(0,n.jsxs)(e.p,{children:["Na janela que aparecer voc\xea deve selecionar e copiar todo o texto dentro do campo ",(0,n.jsx)(e.em,{children:"Target"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"texto no campo Target nas propriedades do atalho",src:a(3913).A+"",width:"454",height:"605"})}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Ao inv\xe9s de clicar e arrastar o mouse por toda a caixa de texto, voc\xea pode clicar uma \xfanica vez sobre o texto e utilizar o atalho ",(0,n.jsx)(e.code,{children:"Ctrl"})," + ",(0,n.jsx)(e.code,{children:"a"})," (selecionar tudo) para selecionar tudo que estiver na caixa de texto."]})}),"\n",(0,n.jsx)(e.h4,{id:"b-complementando-e-executando-o-comando",children:"b. Complementando e executando o comando"}),"\n",(0,n.jsxs)(e.p,{children:["Abra o programa Powershell (ou Terminal) atrav\xe9s do menu iniciar. Cole o comando dentro da janela do programe e complemente com o texto ",(0,n.jsx)(e.code,{children:" --dev"})," (aten\xe7\xe3o para o espa\xe7o para n\xe3o colar com o fim do comando copiado)."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"programa Terminal no menu iniciar do Windows 10",src:a(9906).A+"",width:"858",height:"670"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"texto no campo Target nas propriedades do atalho",src:a(3563).A+"",width:"1156",height:"687"})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.p,{children:"Alternativamente voc\xea pode executar diretamente o comando abaixo em uma janela do Powershell:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-powershell",children:"$env:APPDATA\\BirdoApp\\venv\\Scripts\\python.exe main.py --dev\n"})}),"\n",(0,n.jsx)(e.h3,{id:"2-criando-projetosepis\xf3disocenas",children:"2) Criando projetos/epis\xf3diso/cenas"}),"\n",(0,n.jsx)(e.p,{children:"Para criar projetos, epis\xf3dios e cenas voc\xea deve digitar o n\xfamero da op\xe7\xe3o desejada."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"texto no campo Target nas propriedades do atalho",src:a(1572).A+"",width:"1061",height:"546"})}),"\n",(0,n.jsx)(e.p,{children:"Para criar um novo projeto, siga as seguintes etapas:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Tecle ",(0,n.jsx)(e.code,{children:"2"}),", para escolher a op\xe7\xe3o ",(0,n.jsx)(e.em,{children:"Criar Novo Projeto"}),";"]}),"\n",(0,n.jsxs)(e.li,{children:["Defina um prefixo de 3 letras mai\xfasculas. Ex.: ",(0,n.jsx)(e.code,{children:"PRJ"}),";"]}),"\n",(0,n.jsx)(e.li,{children:"Defina o nome completo do projeto;"}),"\n",(0,n.jsx)(e.li,{children:"Escreva uma breve descri\xe7\xe3o sobre o projeto;"}),"\n",(0,n.jsx)(e.li,{children:"Cole o caminho da pasta ra\xedz do projeto no servidor;"}),"\n",(0,n.jsx)(e.li,{children:"Opcionalmente, cole o caminho para um arquivo de imagem para servir de \xedcone do projeto."}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Em seguida voc\xea deve ver mensagens de confirma\xe7\xe3o e pressionar qualquer tecla para voltar ao menu inicial do Modo Desenvolvedor. Depois disso o projeto vai aparecer dispon\xedvel para ",(0,n.jsx)(e.em,{children:"todos"})," que tiverem feito ",(0,n.jsx)(e.a,{href:"./configuracao-inicial",children:"a configura\xe7\xe3o da variante de est\xfadio"})," do BirdoApp."]}),"\n",(0,n.jsxs)(e.ol,{start:"5",children:["\n",(0,n.jsx)(e.li,{children:"Inicie a interface do BirdoApp e veja o projeto configurado"}),"\n"]})]})}function l(o={}){const{wrapper:e}={...(0,s.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}},8160:(o,e,a)=>{a.d(e,{A:()=>r});const r=a.p+"assets/images/configProj00-6d4dc90000c7aad6d9045d0c225395d2.png"},3913:(o,e,a)=>{a.d(e,{A:()=>r});const r=a.p+"assets/images/configProj01-1776c1e945e55f166211922fe69d8b52.png"},9906:(o,e,a)=>{a.d(e,{A:()=>r});const r=a.p+"assets/images/configProj02-fa5afc3794f3b4e5252f5e99b5c01793.png"},3563:(o,e,a)=>{a.d(e,{A:()=>r});const r=a.p+"assets/images/configProj03-b37e17043fda61789e4267d3c5c65ac8.png"},1572:(o,e,a)=>{a.d(e,{A:()=>r});const r=a.p+"assets/images/configProj04-a729c5f9cf80d1c4d5d1e3c04c32b87d.png"},8453:(o,e,a)=>{a.d(e,{R:()=>i,x:()=>d});var r=a(6540);const n={},s=r.createContext(n);function i(o){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function d(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(n):o.components||n:i(o.components),r.createElement(s.Provider,{value:e},o.children)}}}]);