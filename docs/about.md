<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'http://q2.qlogo.cn/headimg_dl?dst_uin=10320625&spec=100',
    name: '代东升',
    title: '软件开发',
    links: [
      { icon: 'qq', link: 'https://tool.gljlw.com/qq/?qq=10320625' }
    ]
  },
  {
    avatar: 'http://q2.qlogo.cn/headimg_dl?dst_uin=1136630099&spec=100',
    name: '豆棚散人',
    title: '视频宣传',
    links: [
      { icon: 'qq', link: 'https://tool.gljlw.com/qq/?qq=1136630099' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/475818713' }
    ]
  },
  {
    avatar: 'https://www.github.com/Jursin.png',
    name: 'Jursin',
    title: '网站开发',
    links: [
      { icon: 'github', link: 'https://github.com/Jursin' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1575907920' }
    ]
  },
]
</script>

# 关于

<VPTeamMembers size="small" :members="members" />

## 使用授权
- 本软件仅供个人教学和演示使用
- 完全免费，可以二次分发
- 严禁对软件进行反编译、破解或修改
- 未经授权不得用于商业用途

<span style="color: #dc2626; font-weight: bold">违反上述有关禁止的内容将承担相应法律责任！</span>