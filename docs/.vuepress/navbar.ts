import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { 
    text: '教程',
    icon: 'material-symbols:menu-book',
    items: [
      { text: '开始使用', icon: 'ep:guide', link: '/guide/start' },
      { text: '使用技巧', icon: 'iconoir:light-bulb', link: '/guide/tips' },
    ]
  },
  { text: '常见问题', icon: 'material-symbols:help', link: '/faq/' },
  { text: '作品展示', icon: 'carbon:demo', link: '/showcase' },
  { text: '更新日志', icon: 'material-symbols:history', badge: { text: '新', type: 'warning' }, link: '/changelog' },
  { text: '关于', icon: 'material-symbols:info', link: '/about' },
  {
    text: '友情链接',
    icon: 'material-symbols:link',
    items: [
      { text: 'GeoGebra 官网',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.99 393.3"><defs><style>.cls-1 { fill: none; stroke: #666; stroke-width: 33.34px; } .cls-1, .cls-2 { stroke-linecap: round; stroke-linejoin: round; } .cls-2 { fill: #99f; stroke: #000; stroke-width: 15.55px; }</style></defs><path class="cls-1" d="M388.85,205.8c-17.59,86.65-109.02,155.83-204.21,154.53-95.19-1.3-158.09-72.6-140.5-159.25S153.17,45.26,248.36,46.56c95.19,1.3,158.09,72.6,140.5,159.25h0Z"/><path class="cls-2" d="M355.74,317.98c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M430.21,147.19c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M160.04,341.76c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M97.7,175.55c0,24.17-20.13,43.76-44.96,43.76S7.78,199.72,7.78,175.55s20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M252.28,51.54c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76S182.49,7.78,207.32,7.78s44.96,19.59,44.96,43.76h0Z"/></g></g></g></svg>'
        },
        link: 'https://www.geogebra.org/'
      },
      { text: 'GeoGebra 网页版',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.99 393.3"><defs><style>.cls-1 { fill: none; stroke: #666; stroke-width: 33.34px; } .cls-1, .cls-2 { stroke-linecap: round; stroke-linejoin: round; } .cls-2 { fill: #99f; stroke: #000; stroke-width: 15.55px; }</style></defs><path class="cls-1" d="M388.85,205.8c-17.59,86.65-109.02,155.83-204.21,154.53-95.19-1.3-158.09-72.6-140.5-159.25S153.17,45.26,248.36,46.56c95.19,1.3,158.09,72.6,140.5,159.25h0Z"/><path class="cls-2" d="M355.74,317.98c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M430.21,147.19c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M160.04,341.76c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M97.7,175.55c0,24.17-20.13,43.76-44.96,43.76S7.78,199.72,7.78,175.55s20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M252.28,51.54c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76S182.49,7.78,207.32,7.78s44.96,19.59,44.96,43.76h0Z"/></g></g></g></svg>'
        },
        link: 'https://www.geogebra.org/calculator'
      },
      { text: 'GeoGebra 下载',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.99 393.3"><defs><style>.cls-1 { fill: none; stroke: #666; stroke-width: 33.34px; } .cls-1, .cls-2 { stroke-linecap: round; stroke-linejoin: round; } .cls-2 { fill: #99f; stroke: #000; stroke-width: 15.55px; }</style></defs><path class="cls-1" d="M388.85,205.8c-17.59,86.65-109.02,155.83-204.21,154.53-95.19-1.3-158.09-72.6-140.5-159.25S153.17,45.26,248.36,46.56c95.19,1.3,158.09,72.6,140.5,159.25h0Z"/><path class="cls-2" d="M355.74,317.98c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M430.21,147.19c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M160.04,341.76c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76,20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M97.7,175.55c0,24.17-20.13,43.76-44.96,43.76S7.78,199.72,7.78,175.55s20.13-43.76,44.96-43.76,44.96,19.59,44.96,43.76h0Z"/><path class="cls-2" d="M252.28,51.54c0,24.17-20.13,43.76-44.96,43.76s-44.96-19.59-44.96-43.76S182.49,7.78,207.32,7.78s44.96,19.59,44.96,43.76h0Z"/></g></g></g></svg>'
        },
        link: 'https://www.geogebra.org/download'
      },
    ]
  }
])
