<template>
  <div class="news-detail">
    <div class="news-detail-header">
      <h1 class="news-detail-title">{{ frontmatter.title }}</h1>
      <div class="news-detail-meta">
        <span class="meta-item">分类：{{ frontmatter.category }}</span>
        <span class="meta-item">发布时间：{{ formatDate(frontmatter.date) }}</span>
        <span class="meta-item">作者：{{ frontmatter.author || '佚名' }}</span>
      </div>
      <div class="news-detail-tags">
        <span 
          v-for="tag in frontmatter.tags" 
          :key="tag" 
          class="detail-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="news-detail-cover" v-if="frontmatter.cover">
      <img :src="frontmatter.cover" :alt="frontmatter.title">
    </div>

    <div class="news-detail-content">
      <Content />
    </div>

    <div class="news-detail-sidebar">
      <LatestNews :news-list="newsList" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { getAllNews } from '@utils/newsHelper'
import LatestNews from './LatestNews.vue' // 确保导入路径正确

const { frontmatter } = useData()
const newsList = ref([])

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  newsList.value = getAllNews()
})
</script>