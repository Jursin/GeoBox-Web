import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const guide = defineCollection({
  type: 'doc',
  dir: 'guide',
  linkPrefix: '/guide',
  title: '教程',
  sidebar: [
    { text: '开始使用', icon: 'ep:guide', link: '/guide/start' },
    { text: '使用技巧', icon: 'iconoir:light-bulb', link: '/guide/tips' },
  ],
})

const faq = defineCollection({
  type: 'post',
  dir: 'faq',
  title: '常见问题',
  link: '/faq/',
  linkPrefix: '/faq/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
    archives: false, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

export default defineCollections([
  guide,
  faq,
])
