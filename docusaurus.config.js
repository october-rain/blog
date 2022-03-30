// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "十雨札记",
  tagline: "Welcome to OctoberRain's Channel ~",
  url: "https://october-rain.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "october-rain", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // readingTime: ({content, frontMatter, defaultReadingTime}) =>
          //   defaultReadingTime({content, options: {wordsPerMinute: 300}}),

          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "OctoberRain",
        logo: {
          alt: "October Rain",
          src: "img/rain.svg",
        },
        items: [
          // 阅读
          { to: "docs/reading", label: "读书笔记", position: "left" },
          
          // 计算机基础
          {
            label: '计算机基础',
            position: 'left',
            items: [
              { to: 'docs/computer-basics/basics', label: '基础'},
              { to: "docs/computer-basics/algorithm/intro", label: "算法" },
            ]
          },
          
          // 前端
          {
            label: "前端",
            position: "left",
            items: [
              { to: "docs/frontend/javascript", label: "Javascript" },
              { to: "docs/frontend/react", label: "React" },
              { to: "docs/frontend/vue", label: "Vue" },
            ],
          },
          
          // 后端
          {
            label: '后端',
            position: 'left',
            items: [
              { to: "docs/backend/java", label: 'Java'}
            ]
          },
          
          // BLOG
          { to: "/blog", label: "BLOG", position: "right" },
          
          // ABOUT 
          {
            type: "doc",
            docId: "about/index",
            position: "right",
            label: "ABOUT",
          },

          // github link
          // {
          //   href: "https://github.com/october-rain",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "博客",
            items: [
              {
                label: "OctoberRain Intro",
                to: "/docs/about",
              },
              {
                label: "BLOG",
                to: "/blog"
              }
            ],
          },
          {
            title: "社交媒体",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/october-rain",
              },
              {
                label: "微信公众号",
                href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MjE2OTY0Ng==&scene=124#wechat_redirect",
              },
            ],
          },
          {
            title: "友情链接",
            items: [],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OctoberRain, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
