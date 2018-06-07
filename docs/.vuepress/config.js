module.exports = {
  title: '前端基础学习路线',
  description: 'front-end-tutorial',
  base: '/enduring-heart/',
  themeConfig: {
    sidebar: genSidebarConfig(''),
    sidebarDepth: 2
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'front-end-roadmap'
      ]
    }
  ]
}