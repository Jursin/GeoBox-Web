import { defineClientConfig } from 'vuepress/client'
import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import AsideNav from './theme/components/AsideNav.vue'
import PageContextMenu from 'vuepress-theme-plume/features/PageContextMenu.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
  },
  layouts: {
    Layout: h(Layout, null, {
      'aside-outline-after': () => h(AsideNav),
      'doc-title-after': () => h(PageContextMenu), 
    }),
  },
})
