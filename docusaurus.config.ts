import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "theCoderSchool",
  tagline: "learn to code. change the world.",
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: "https://academy-content-hub.web.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TCS", // Usually your GitHub org/user name.
  projectName: "creator-hub", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Homepage",
      logo: {
        alt: "theCoderSchool Logo",
        src: "img/TCS_Logo2.png",
        width: 287,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "robloxSidebar1",
          position: "left",
          label: "Rblx-1",
        },
        {
          type: "docSidebar",
          sidebarId: "robloxSidebar2",
          position: "left",
          label: "Rblx-2",
        },
        {
          type: "docSidebar",
          sidebarId: "robloxSidebar3",
          position: "left",
          label: "RblxEntre-1",
        },
        {
          type: "docSidebar",
          sidebarId: "robloxSidebar4",
          position: "left",
          label: "RblxEntre-2",
        },
        {
          type: "docSidebar",
          sidebarId: "robloxSidebar5",
          position: "left",
          label: "RblxEntre-3",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar1",
          position: "left",
          label: "Py-1",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar2",
          position: "left",
          label: "Py-2",
        },
        {
          type: "docSidebar",
          sidebarId: "roboticsSidebar1",
          position: "left",
          label: "mBot-1",
        },
        {
          href: "https://github.com/vietvince/TCS-Website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Sections",
    //       items: [
    //         {
    //           label: "Roblox",
    //           to: "/docs/intro",
    //         },
    //         {
    //           label: "Unity",
    //           to: "/docs/unity",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "theCoderSchool",
    //           href: "https://www.thecoderschool.com/",
    //         },
    //         // {
    //         //   label: 'Discord',
    //         //   href: 'https://discordapp.com/invite/docusaurus',
    //         // },
    //         // {
    //         //   label: 'Twitter',
    //         //   href: 'https://twitter.com/docusaurus',
    //         // },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/vietvince/TCS-Website",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} theCoderSchool, Built by Code Coaches.`,
    // },
    prism: {
      theme: prismThemes.nightOwlLight,
      additionalLanguages: ["lua", "python", "csharp"],
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
