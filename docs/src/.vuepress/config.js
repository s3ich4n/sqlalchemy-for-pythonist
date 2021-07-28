const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '파이썬 개발자를 위한 SQLAlchemy',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/sqlalchemy-for-pythonist/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/SoogoonSoogoonPythonists/sqlalchemy-for-pythonist'
      },
    ],
    sidebar: {
      '/tutorial/': [
        {
          title: 'Tutorial',
          path: '/tutorial/',
          collapsable: false,
          children: [
            '1. 튜토리얼 개요',
            '2. 연결 설정하기',
            '3. 트랜잭션 및 DBAPI 작업',
            '4. 데이터베이스 메타데이터로 작업하기',
            '5. 데이터 핸들링 - Core, ORM으로 행 조회하기',
            '5. 데이터 핸들링 - Core로 행 삽입하기',
            '5. 데이터 핸들링 - Core로 행 수정 삭제하기',
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
