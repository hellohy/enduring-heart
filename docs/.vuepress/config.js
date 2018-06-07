module.exports = {
  title: '前端基础学习路线',
  description: 'front-end-tutorial',
  base: '/enduring-heart/',
  themeConfig: {
    sidebar: {
      '/': genSidebarConfig(''),
      '/curated-tutorial/': [
        {
          title: '基础教程',
          collapsable: false,
          children: [
            '',
            'basic-css',
            'basic-html',
            'basic-javascript'
          ]
        }
      ]
    },
    sidebarDepth: 2,
    nav: [
      {
        text: '基础教程',
        link: '/curated-tutorial/'
      },
      {
        text: '分享会',
        link: '/share/'
      },
      {
        text: '翻译',
        link: '/translation/'
      }
    ]
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