import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// 基础配置
const baseConfig = defineConfig({
  // 网站基本信息
  title: '简约科技',
  description: '公司简介 - 提供专业的产品和服务',
  lang: 'zh-CN',
    // 核心配置：控制主题切换按钮
  appearance: false, // true=显示切换按钮；false=隐藏；'dark'=默认深色模式（仍可切换）

  // 主题配置
  themeConfig: {
    // 网站logo
    logo: '/images/logo.png',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '新闻动态', link: '/news-list' },
      { 
        text: '产品服务', 
        items: [
          { text: '服务概览', link: '/services/' },
          { text: '音频转换产品', link: '/services/service-1' },
          { text: '影视软件产品', link: '/services/service-2' },
          { text: '视频编辑工具', link: '/services/service-3' }
        ]
      }, 
       { 
        text: '关于我们', 
        items: [
          { text: '公司简介', link: '/about/' },
          { text: '团队介绍', link: '/about/team' },
          { text: '发展历程', link: '/about/history' }
        ]
      },
      { text: '联系我们', link: '/contact/' }
    ],
    
    // 侧边栏
    sidebar: {
      '/about/': [
        {
          text: '关于我们',
          items: [
            { text: '公司简介', link: '/about/' },
            { text: '团队介绍', link: '/about/team' },
            { text: '发展历程', link: '/about/history' }
          ]
        }
      ],
      '/services/': [
        {
          text: '产品服务',
          items: [
            { text: '服务概览', link: '/services/' },
            { text: '音频转换产品', link: '/services/service-1' },
            { text: '影视软件产品', link: '/services/service-2' },
            { text: '视频编辑工具', link: '/services/service-3' }
          ]
        }
      ]
     
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/403914291?tab=repositories' },
      // { icon: 'twitter', link: 'https://twitter.com' },
      // { icon: 'linkedin', link: 'https://linkedin.com' }
    ],
    
    // 页脚
    footer: {
      message: '© 2026 公司名称 版权所有',
      copyright: '备案号：京ICP备20260089号'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 暗色模式切换
    // darkModeSwitchLabel: '主题',
    
    // 返回顶部按钮
    returnToTopLabel: '返回顶部',
    
    // 大纲配置
    outline: {
      level: [2, 6],
      label: '页面导航'
    }
  },
  
  // SEO优化
  head: [
    ['meta', { name: 'keywords', content: '公司,产品,服务,解决方案' }],
    ['meta', { name: 'author', content: '简约科技' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    `]
  ],
  
  // 构建输出
  outDir: '../dist',
  
  // 最后更新时间
  lastUpdated: true,
  
  // 清理URL中的.html后缀
  cleanUrls: true,
  
  // Markdown配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  
  // Vite配置
  vite: {
    css: {
      postcss: './postcss.config.js'
    },
    resolve: {
      alias: {
        '@utils': '/.vitepress/theme/utils'
      }
    }
  }
});

// 集成Mermaid图表（可选）
export default withMermaid(baseConfig);