module.exports = {
    title: "李闯的博客",
    description: '李闯的博客',
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },                      // 根路径
        { text: '页面', link: '/pages/' },
        { text: '我的大学', link: 'https://www.sjtu.edu.cn' }, // 外部链接

        // 下拉列表显示分组
        {
          text: '高级页面',
          items: [
            { 
              text: '页面', 
              items: [
                { text: '1', link: '/pages/1' },
                { text: '2', link: '/pages/2' }
              ] 
            }]
        }
      ]
    }
}