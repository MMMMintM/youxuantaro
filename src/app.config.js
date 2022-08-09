export default defineAppConfig({
  pages: [
    'pages/index/index',

  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh:true
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
