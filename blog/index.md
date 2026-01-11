---
title: 新闻动态
description: 最新新闻、技术文章和公司动态
layout: blog
---

# 新闻动态

## 最新动态

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
  <!-- 文章 1 -->
  <article class="card group hover:shadow-2xl transition-all duration-300">
    <!-- 优化：合并冗余div，简化结构 -->
    <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center text-4xl">
      📱
    </div>
    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      <span class="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs mr-3">
        技术文章
      </span>
      <!-- 优化：补充datetime属性，语义化 -->
      <time datetime="2024-01-15">2024-01-15</time>
    </div>
    <h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
      Vue 3.4 新特性详解
    </h3>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      深入解析 Vue 3.4 的最新特性，包括性能优化和开发体验改进...
    </p>
    <!-- 注意：需确保 /blog/vue-3-4.md 文件存在，或配置路由别名 -->
    <a href="/blog/new-1" class="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center">
      阅读更多
    </a>
  </article>
  
  <!-- 文章 2 -->
  <article class="card group hover:shadow-2xl transition-all duration-300">
    <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center text-4xl">
      🏢
    </div>
    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      <span class="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs mr-3">
        公司新闻
      </span>
      <time datetime="2024-01-10">2024-01-10</time>
    </div>
    <h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
      公司荣获最佳雇主奖
    </h3>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      在2023年度评选中，公司获得"最佳雇主"荣誉称号...
    </p>
    <a href="/blog/new-1" class="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center">
      阅读更多
    </a>
  </article>
  
  <!-- 文章 3 -->
  <article class="card group hover:shadow-2xl transition-all duration-300">
    <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center text-4xl">
      🚀
    </div>
    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      <span class="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-2 py-1 rounded text-xs mr-3">
        产品发布
      </span>
      <time datetime="2024-01-05">2024-01-05</time>
    </div>
    <h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
      新一代智能分析平台发布
    </h3>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      我们的最新产品——智能数据分析平台正式发布，帮助企业更好决策...
    </p>
    <a href="/blog/new-1" class="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center">
      阅读更多
    </a>
  </article>
</div>

## 分类浏览

<div class="flex flex-wrap gap-4 mb-12">
  <a href="/blog/new-1" class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
    技术文章
  </a>
  <!-- <a href="/blog/category/news" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
    公司新闻
  </a>
  <a href="/blog/category/product" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
    产品发布
  </a>
  <a href="/blog/category/industry" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
    行业动态
  </a> -->
</div>

## 推荐文章

<div class="space-y-6">
  <div class="card hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
      <div class="flex-shrink-0 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
        📊
      </div>
      <div>
        <h3 class="text-lg font-bold mb-1">2023年技术趋势报告</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
          深度分析2023年最重要的技术发展趋势
        </p>
        <span class="text-xs text-gray-500 dark:text-gray-400">2023-12-20</span>
      </div>
    </div>
  </div>
  
  <div class="card hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
      <div class="flex-shrink-0 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
        🎓
      </div>
      <div>
        <h3 class="text-lg font-bold mb-1">团队技术培训计划启动</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
          全面提升团队技术水平的新培训计划
        </p>
        <span class="text-xs text-gray-500 dark:text-gray-400">2023-12-15</span>
      </div>
    </div>
  </div>
</div>

## 订阅更新

<div class="card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 mt-12 p-6">
  <div class="text-center">
    <h3 class="text-2xl font-bold mb-4">订阅我们的新闻动态</h3>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      第一时间获取最新技术文章和公司动态
    </p>
    <form class="max-w-md mx-auto w-full">
      <!-- 优化：小屏下表单换行，提升移动端体验 -->
      <div class="flex flex-col sm:flex-row gap-2 w-full">
        <input 
          type="email" 
          placeholder="请输入您的邮箱"
          class="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white w-full"
          required
        />
        <button type="submit" class="btn-primary whitespace-nowrap w-full sm:w-auto">
          订阅
        </button>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
        我们尊重您的隐私，不会分享您的邮箱信息
      </p>
    </form>
  </div>
</div>