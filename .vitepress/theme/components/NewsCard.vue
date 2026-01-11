<template>
  <!-- 假设你的NewsCard模板 -->
  <div class="news-card">
    <img :src="news.cover" :alt="news.title" v-if="news.cover" class="news-card-cover">
    <div class="news-card-content">
      <h3 class="news-card-title">
        <a :href="`/${news.path}`">{{ news.title }}</a>
      </h3>
      <p class="news-card-date">{{ formatDate(news.date) }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN')
}
</script>