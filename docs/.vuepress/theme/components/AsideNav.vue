<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale, useRoute } from 'vuepress/client'

interface Locale {
  share: string
  copied: string
  qqGroup: string
}

const locales: Record<string, Locale> = {
  '/': { 
    share: '分享此页面',
    copied: '链接已复制！',
    qqGroup: '加入 QQ 群讨论'
  },
}

const lang = useRouteLocale()
const route = useRoute()
const locale = computed(() => locales[lang.value])

const copyPageLink = () => {
  const url = window.location.origin + route.path
  navigator.clipboard.writeText(url)
    .then(() => {
      alert(locale.value.copied)
    })
    .catch(err => {
      console.error('复制失败:', err)
    })
}
</script>

<template>
  <div class="aside-nav-wrapper">
    <a class="link" href="#" @click.prevent="copyPageLink">
      <Icon name="tabler:share" size="1.2em" />
      <span class="link-text">{{ locale.share }}</span>
      <span class="vpi-arrow-right" />
    </a>
    <a class="link" href="https://qm.qq.com/q/5qsNgfa6fm" target="_blank" rel="noopener noreferrer">
      <Icon name="mingcute:qq-fill" size="1.2em" />
      <span class="link-text">{{ locale.qqGroup }}</span>
      <span class="vpi-arrow-right" />
    </a>
  </div>
</template>

<style scoped>
.aside-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  margin: 16px 16px 0;
  border-top: solid 1px var(--vp-c-divider);
}

.aside-nav-wrapper .link {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.aside-nav-wrapper .link:hover {
  color: var(--vp-c-brand-1);
}

.aside-nav-wrapper .link .link-text {
  flex: 1 2;
  font-size: 12px;
}
</style>