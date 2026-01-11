import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import NavBar from './components/NavBar.vue'
// import Footer from './components/Footer.vue'
import ThemeToggle from './components/ThemeToggle.vue'
// 导入自定义组件
import NewsList from './components/NewsList.vue'
import NewsDetail from './components/NewsDetail.vue'
import CategoryFilter from './components/CategoryFilter.vue'
import TagCloud from './components/TagCloud.vue'
import LatestNews from './components/LatestNews.vue'
import NewsArchive from './components/NewsArchive.vue'


export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('NavBar', NavBar)
    // app.component('CustomFooter', Footer)
    app.component('ThemeToggle', ThemeToggle)

    app.component('NewsList', NewsList)
    app.component('NewsDetail', NewsDetail)
    app.component('CategoryFilter', CategoryFilter)
    app.component('TagCloud', TagCloud)
    app.component('LatestNews', LatestNews)
    app.component('NewsArchive', NewsArchive)
  }
}