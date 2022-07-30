export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subPackages:[
    {
      "root":"pages/classify/",
      "pages":[
        "index"
      ]
    },
    {
      "root":"pages/shopping/",
      "pages":[
        "index"
      ]
    },
    {
      "root":"pages/user/",
      "pages":[
        "index"
      ]
    },
  ]
})
