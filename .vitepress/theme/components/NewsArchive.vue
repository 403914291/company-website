<template>
  <div class="news-archive">
    <h2 class="archive-title">新闻归档</h2>
    
    <div v-for="(newsList, yearMonth) in archiveData" :key="yearMonth" class="archive-month">
      <h3 class="archive-month-title">{{ formatYearMonth(yearMonth) }}</h3>
      <ul class="archive-news-list">
        <li v-for="news in newsList" :key="news.path" class="archive-news-item">
          <a :href="`/${news.path}`">
            <span class="archive-date">{{ formatDate(news.date) }}</span>
            <span class="archive-title">{{ news.title }}</span>
            <span class="archive-category">[{{ news.category }}]</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getAllNews, archiveNewsByDate } from '@utils/newsHelper'

const newsList = ref([])

const archiveData = computed(() => {
  return archiveNewsByDate(newsList.value)
})

const formatYearMonth = (yearMonth) => {
  const [year, month] = yearMonth.split('-')
  return `${year}年${month}月`
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric'
  })
}

onMounted(() => {
  newsList.value = getAllNews()
})
</script>