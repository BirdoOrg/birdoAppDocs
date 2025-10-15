// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BirdoApp',
    tagline: 'Bem vindo(a) à documentação do BirdoApp!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://birdoorg.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/birdoAppDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'birdo', // Usually your GitHub org/user name.
  projectName: 'birdoAppDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
//        blog: {
//          showReadingTime: true,
//          feedOptions: {
//            type: ['rss', 'atom'],
//            xslt: true,
//          },
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//          // Useful options to enforce blogging best practices
//          onInlineTags: 'warn',
//          onInlineAuthors: 'warn',
//          onUntruncatedBlogPosts: 'warn',
//        },
//        theme: {
//          customCss: './src/css/custom.css',
//        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/birdoApp-social-card.png',
      navbar: {
        title: 'BirdoApp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
	  {
	    href: '/docs/visao-geral',  
	    label: 'Sobre o BirdoApp',
	    position: 'left',
	  },
	  {
	    href: '/docs/modos-de-uso#modo-standalone',  
	    label: 'Para Artistas',
	    position: 'left',
	  },
	  {
	    href: '/docs/modos-de-uso#para-estudios',  
	    label: 'Para Estúdios',
	    position: 'left',
	  },
//          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/BirdoOrg/BirdoApp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
              {
                label: 'Visão Geral',
                to: '/docs/visao-geral',
              },
              {
                label: 'Instalação',
                to: '/docs/instalacao',
              },
              {
                label: 'Perfis',
                to: '/docs/perfis/',
              }
            ],
          },
          {
            title: 'Birdo',
            items: [
              {
                label: 'Site',
                href: 'https://www.birdo.com.br/',
              },
              {
                label: 'Instagram',
                href: 'http://instagram.com/birdostudio',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/birdostudio/',
              },
            ],
          },
          {
            title: 'Outros',
            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
              {
                label: 'GitHub',
                href: 'https://github.com/BirdoOrg/BirdoApp',
              },
            ],
          },        ],
        copyright: `Copyright © ${new Date().getFullYear()} BirdoApp, Birdo. Feito com  Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [[ require.resolve('docusaurus-lunr-search'), {
	languages: ['pt'] // language codes
    }]],
};

export default config;
