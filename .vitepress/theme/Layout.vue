<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <!-- 自定义导航栏前的内容 -->
    </template>
    
    <template #nav-bar-content-after>
      <ThemeToggle />
    </template>
    
    <template #doc-after>
      <!-- 文档之后的内容 -->
    </template>
    
    <template #doc-footer-before>
      <!-- 文档页脚前的内容 -->
    </template>
    
    <template #aside-ads-before>
      <!-- 侧边栏广告前 -->
    </template>
  </Layout>
</template>
