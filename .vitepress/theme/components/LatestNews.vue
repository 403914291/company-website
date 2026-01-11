<template>
  <div class="latest-news">
    <h3 class="sidebar-title">最新新闻</h3>
    <ul class="latest-news-list">
      <li v-for="news in latestNews" :key="news.path" class="latest-news-item">
        <a :href="`/${news.path}`">
          <span class="date">{{ formatDate(news.date) }}</span>
          <span class="title">{{ news.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// 移除TS类型，改为JS的props定义
const props = defineProps({
  newsList: {
    type: Array,
    required: true
  }
})

// 获取最新的8条新闻
const latestNews = computed(() => {
  return [...props.newsList].slice(0, 8)
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>