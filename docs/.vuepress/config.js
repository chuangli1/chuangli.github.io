module.exports = {
    title: "李闯的网站",
    description: '明天，你好',
    base:'/',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search...',
        sidebar: {
            '/experience/autocell/': [
              '0',     /* /foo/ */
              '1',  /* /foo/one.html */
              '2'   /* /foo/two.html */
            ],
            '/experience/epm2/': [
                '0',     /* /foo/ */
                '1',  /* /foo/one.html */
                '2'   /* /foo/two.html */
              ],
              '/diary/0':[
                '0',
              ]
          }
    }
}