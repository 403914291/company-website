<template>
  <div class="news-container">
    <!-- 筛选栏：分类+标签（保留原功能） -->
    <!-- <div class="news-filter-bar">
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
    </div> -->

    <!-- 新布局：左侧轮播 + 右侧新闻列表 -->
    <div class="news-main-layout">
      <!-- 左侧：前5条新闻轮播图 -->
      <div class="news-carousel">
        <div class="carousel-wrapper">
          <div 
            v-for="(news, index) in top5News" 
            :key="news.path" 
            class="carousel-item"
            :class="{ active: currentCarouselIndex === index }"
          >
            <img :src="news.cover" :alt="news.title" class="carousel-img">
            <!-- 轮播图上的新闻信息（可选） -->
            <div class="carousel-info">
              <span class="carousel-category">{{ news.category }}</span>
              <h3 class="carousel-title">{{ news.title }}</h3>
              <span class="carousel-date">{{ formatDate(news.date) }}</span>
            </div>
          </div>
        </div>
        <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <button 
            v-for="(_, index) in top5News" 
            :key="index"
            :class="{ active: currentCarouselIndex === index }"
            @click="currentCarouselIndex = index"
          ></button>
        </div>
      </div>

      <!-- 右侧：分类名称 + 新闻列表 -->
      <div class="news-right-section">
        <!-- 分类名称（当前选中的分类） -->
        <div class="category-title">
          {{ selectedCategory || "全部新闻" }}
        </div>

        <!-- 新闻列表 -->
        <div class="news-list">
          <div 
            v-for="news in paginatedNews.items" 
            :key="news.path" 
            class="news-item"
          >
            <!-- 新闻图片（小图） -->
            <div class="news-item-img" v-if="news.cover">
              <img :src="news.cover" :alt="news.title">
            </div>
            <!-- 新闻内容 -->
            <div class="news-item-content">
              <h3 class="news-title">
                <a :href="`${news.path}`">{{ news.title }}</a>
              </h3>
              <div class="news-date">{{ formatDate(news.date) }}</div>
            </div>
          </div>
        </div>

        <!-- 分页控件（保留原功能） -->
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onMounted as onMountedVue, onUnmounted } from 'vue'
import { 
  getAllNews, 
  getAllCategories, 
  getAllTags, 
  filterNewsByCategory, 
  filterNewsByTag,
  paginateNews
} from '@utils/newsHelper.js'
import { withBase } from 'vitepress'

// 1. 响应式数据（保留原功能）
const newsList = ref([])
const selectedCategory = ref('')
const selectedTag = ref('')
const currentPage = ref(1)
// 新增：轮播图当前索引
const currentCarouselIndex = ref(0)

// 2. 计算属性（新增“前5条新闻”）
const filteredNews = computed(() => {
  let filtered = [...newsList.value]
  filtered = filterNewsByCategory(filtered, selectedCategory.value)
  filtered = filterNewsByTag(filtered, selectedTag.value)
  return filtered
})
const paginatedNews = computed(() => paginateNews(filteredNews.value, currentPage.value, 10))
const categories = computed(() => getAllCategories(newsList.value))
const tags = computed(() => getAllTags(newsList.value))
// 新增：筛选后取前5条新闻（用于轮播）
const top5News = computed(() => filteredNews.value.slice(0, 5))

// 3. 工具方法（保留原功能）
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 4. 事件处理（保留原功能）
const handleCategoryChange = (category) => {
  selectedCategory.value = category
  currentPage.value = 1
  currentCarouselIndex.value = 0 // 切换分类后重置轮播
}
const handleTagSelect = (tag) => {
  selectedTag.value = tag
  currentPage.value = 1
  currentCarouselIndex.value = 0 // 切换标签后重置轮播
}
const changePage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 5. 轮播自动切换（新增）
onMountedVue(() => {
  newsList.value = getAllNews()
  // 3秒自动切换轮播
  const carouselTimer = setInterval(() => {
    currentCarouselIndex.value = (currentCarouselIndex.value + 1) % (top5News.value.length || 1)
  }, 3000)
  // 组件销毁时清除定时器
   onUnmounted(() => clearInterval(carouselTimer))
  
})
</script>

<style scoped>
/* 整体容器 */
.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 筛选栏（保留原样式） */
.news-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

/* 主布局：左侧轮播 + 右侧列表 */
.news-main-layout {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

/* 左侧轮播区域 */
.news-carousel {
  width: 60%;
  height: 400px;
  position: relative;
  overflow: hidden;
  /* border: 2px solid #ff4d4f; 红色边框匹配设计图 */
}
.carousel-wrapper {
  width: 100%;
  height: 100%;
}
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 轮播图上的信息（可选） */
.carousel-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}
.carousel-category {
  background: #ff4d4f;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 10px;
}
.carousel-title {
  margin: 8px 0 5px;
  font-size: 18px;
}
/* 轮播指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 8px;
}
.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #fff;
  opacity: 0.5;
  cursor: pointer;
}
.carousel-indicators button.active {
  opacity: 1;
  background: #ff4d4f;
}

/* 右侧区域：分类名称 + 新闻列表 */
.news-right-section {
  width: 40%;
}
/* 分类名称 */
.category-title {
  font-size: 20px;
  font-weight: bold;
 /* color: #ff4d4f; */
  margin-bottom: 20px;
 border-bottom: 1px solid #dcd8d8; 
  padding-bottom: 5px;
}
/* 新闻列表（小图+标题+时间） */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.news-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px dashed #eee;
}
.news-item-img {
  width: 80px;
  height: 60px;
  flex-shrink: 0;
}
.news-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.news-item-content {
  flex: 1;
}
.news-title {
  margin: 0 0 5px 0;
  font-size: 16px;
}
.news-title a {
  color: #333;
  text-decoration: none;
}
.news-title a:hover {
  color: #05c5f5;
}
.news-date {
  font-size: 12px;
  color: #999;
}

/* 分页控件（保留原样式） */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
}
.page-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.page-info {
  color: #666;
}
</style>