import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kotlin Study',
  tagline: 'This page will have all concepts and studies related to web-development and kotlin',
  favicon: 'img/kotlin-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yanBrandao', // Usually your GitHub org/user name.
  projectName: 'kotlin-study', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kotlin Study',
      logo: {
        alt: 'Kotlin Logo',
        src: 'img/kotlin-icon.png',
      },
      items: [
          {to: '/docs/studies', label: 'Studies', position: 'left'},
          {to: '/about-me', label: 'About me', position: 'left'},
          {
              href: 'https://github.com/yanbrandao',
              label: 'GitHub',
              position: 'right',
            },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Studies',
          items: [
            {
              label: 'Introduction',
              to: '/docs/studies',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Instagram',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About me',
              to: '/about-me',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yanbrandao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yanBrandao. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
