/**
 * @class       : config
 * @author      : cromarmot (yexiaorain@gmail.com)
 * @created     : 星期三 11月 27, 2019 17:37:53 CST
 * @description : config
 */

module.exports = {
  title: 'Hell VuePress',
  description: 'Justin playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/guide/',
    ]
  },
  markdown: {
    toc:{includeLevel: [2, 3] },
    lineNumbers: true
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress en-US',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress zh',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}
