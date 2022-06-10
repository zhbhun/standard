module.exports = {
  base: '/standard/',
  title: '开发规范',
  description: '前端开发规范',
  themeConfig: {
    nav: [
      { text: '规范', link: '/rules/introduction' },
      { text: '教程', link: '/guide/introduction' },
    ],
    displayAllHeaders: true,
    sidebar: {
      '/rules/': [
        'introduction',
        {
          title: '基础',
          collapsable: false,
          children: [
            ['basic/naming', '命名'],
            ['basic/tool', '工具'],
          ],
        },
        {
          title: '语言',
          collapsable: false,
          children: [
            ['language/html', 'html'],
            ['language/css', 'css'],
            ['language/javascript', 'javascript'],
          ],
        },
        {
          title: '框架',
          collapsable: false,
          children: [
            ['framework/vue2', 'vue2'],
            ['framework/vue3', 'vue3'],
            ['framework/react', 'react'],
          ],
        },
        {
          title: '项目',
          collapsable: false,
          children: [
            'project/structure',
            'project/version',
            'project/archive',
          ],
        },
        {
          title: '集成',
          collapsable: false,
          children: [
            ['integration/vue2', 'vue2'],
            ['integration/vue3-tsx', 'vue3 + tsx'],
          ],
        },
      ],
      '/guide/': [
        {
          title: 'Git',
          collapsable: false,
          children: [
            ['tools/stylelint-order', 'Stylelint-order'],
            ['tools/commit-linter', 'Commit-linter'],
            ['tools/git-command', 'Git Command'],
          ],
        },
        {
          title: '项目',
          collapsable: false,
          children: ['project/structure-in-action'],
        },
      ],
    },
    sidebarDepth: 0,
  },
}
