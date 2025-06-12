import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GeoBox-Web",
  description: "GeoBox 官方网站",
  base: '/GeoBox-Web/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#FE6B01' }]
  ],

  themeConfig: {
    logo: '/logo.ico',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '使用教程', 
        items: [
          { text: '开始使用', link: '/guide/start' },
          { text: '使用技巧', link: '/guide/tips' },
          { text: '常见问题解答', link: '/guide/faq' },
        ]
      },
      { text: '作品展示', link: '/showcase' },
      { text: '相关链接', link: '/links' },
      { text: '版权声明', link: '/copyright' }
    ],

    // 侧边栏配置
    sidebar: [
      { text: '首页', link: '/' },
      {
        text: '使用教程',
        items: [
          { text: '开始使用', link: '/guide/start' },
          { text: '使用技巧', link: '/guide/tips' },
          { text: '常见问题解答', link: '/guide/faq' },
        ]
      },
      { text: '作品展示', link: '/showcase' },
      { text: '相关链接', link: '/links' },
      { text: '版权声明', link: '/copyright' }
    ],

    search: {
  provider: "local",
  options: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "没有找到结果",
        resetButtonTitle: "清除搜索条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
        },
      },
    },
  },
},

    // 社交链接
    socialLinks: [
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1296DB" d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>'
        },
        link: 'https://qm.qq.com/q/5qsNgfa6fm',
        ariaLabel: 'QQ群'
      },
      { 
        icon: 'github',
        link: 'https://github.com/Jursin/GeoBox-Web',
        ariaLabel: 'GitHub仓库'
      }
    ],
    
    footer: {
      message: '© 代东升 | 2024-Until Now All Rights Reserved',
      copyright: ''
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/Jursin/GeoBox-Web/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },

  cleanUrls: true,
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})