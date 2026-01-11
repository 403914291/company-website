<template>
  <nav class="navbar">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <img :src="logo" alt="Logo" class="h-8 w-auto">
          <span class="text-xl font-bold text-gray-900 dark:text-white">
            {{ siteTitle }}
          </span>
        </a>
        
        <!-- 桌面导航 -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.text"
            :href="item.link"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {{ item.text }}
          </a>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- 移动端菜单 -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            v-for="item in navItems" 
            :key="item.text"
            :href="item.link"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { site, theme } = useData()
const mobileMenuOpen = ref(false)

const siteTitle = computed(() => site.value.title)
const logo = computed(() => theme.value.logo || '/images/logo.png')
const navItems = computed(() => theme.value.nav || [])
</script>

<style scoped>
.navbar {
  @apply bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800;
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>