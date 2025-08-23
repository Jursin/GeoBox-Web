import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GeoBox",
  description: "GeoBox 官方网站",
  base: '/',
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
          { text: '常见问题', link: '/guide/faq' },
        ]
      },
      { text: '作品展示', link: '/showcase' },
      { text: '更新日志', link: '/changelog' },
      { text: '友情链接', link: '/links' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '使用教程',
        collapsed: false,
        items: [
          { text: '开始使用', link: '/guide/start' },
          { text: '使用技巧', link: '/guide/tips' },
          { text: '常见问题', link: '/guide/faq' },
        ]
      },
      { text: '作品展示', link: '/showcase' },
      { text: '更新日志', link: '/changelog' },
      { text: '友情链接', link: '/links' },
      { text: '关于', link: '/about' }
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
        icon: 'qq',
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
      copyright: '© 代东升 | 2024-Until Now All Rights Reserved',
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2024096921号-1</a>'      
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
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  }
})