<template>
  <div class="news-container">
    <div class="news-filter-bar">
      <CategoryFilter 
        :categories="categories" 
        :selected-category="selectedCategory"
        @change="handleCategoryChange"
      />
      <TagCloud 
        :tags="tags" 
        :selected-tag="selectedTag"
        @select="handleTagSelect"
      />
    </div>

    <div class="news-layout">
      <div class="news-main">
        <!-- 新闻列表 -->
        <div class="news-list">
          <div 
            v-for="news in paginatedNews.items" 
            :key="news.path" 
            class="news-item"
          >
            <div class="news-item-cover" v-if="news.cover">
              <img :src="news.cover" :alt="news.title">
            </div>
            <div class="news-item-content">
              <h3 class="news-title">
                <a :href="`/${news.path}`">{{ news.title }}</a>
              </h3>
              <div class="news-meta">
                <span class="news-category">{{ news.category }}</span>
                <span class="news-date">{{ formatDate(news.date) }}</span>
                <span class="news-author">{{ news.author }}</span>
              </div>
              <p class="news-desc" v-if="news.description">{{ news.description }}</p>
              <div class="news-tags">
                <span 
                  v-for="tag in news.tags" 
                  :key="tag" 
                  class="news-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页控件 -->
        <div class="pagination" v-if="paginatedNews.totalPages > 1">
          <button 
            class="page-btn"
            :disabled="paginatedNews.currentPage === 1"
            @click="changePage(paginatedNews.currentPage - 1)"
          >
            上一页
          </button>
          <span class="page-info">
            {{ paginatedNews.currentPage }} / {{ paginatedNews.totalPages }}
          </span>
          <button 
            class="page-btn"
            :disabled="paginatedNews.currentPage === paginatedNews.totalPages"
            @click="changePage(paginatedNews.currentPage + 1)"
          >
            下一页
          </button>
        </div>
      </div>

      <!-- 侧边栏：最新新闻 -->
      <div class="news-sidebar">
        <LatestNews :news-list="newsList" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  getAllNews, 
  getAllCategories, 
  getAllTags, 
  filterNewsByCategory, 
  filterNewsByTag,
  paginateNews
} from '@utils/newsHelper'

// 响应式数据
const newsList = ref([])
const selectedCategory = ref('')
const selectedTag = ref('')
const currentPage = ref(1)

// 计算属性
const filteredNews = computed(() => {
  let filtered = [...newsList.value]
  // 按分类筛选
  filtered = filterNewsByCategory(filtered, selectedCategory.value)
  // 按标签筛选
  filtered = filterNewsByTag(filtered, selectedTag.value)
  return filtered
})

const paginatedNews = computed(() => {
  return paginateNews(filteredNews.value, currentPage.value, 10)
})

const categories = computed(() => getAllCategories(newsList.value))
const tags = computed(() => getAllTags(newsList.value))

// 方法
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN')
}

const handleCategoryChange = (category) => {
  selectedCategory.value = category
  currentPage.value = 1 // 重置页码
}

const handleTagSelect = (tag) => {
  selectedTag.value = tag
  currentPage.value = 1 // 重置页码
}

const changePage = (page) => {
  currentPage.value = page
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 初始化
onMounted(() => {
  newsList.value = getAllNews()
})
</script>