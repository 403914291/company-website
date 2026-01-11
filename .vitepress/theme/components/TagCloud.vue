<template>
  <div class="tag-cloud">
    <span class="tag-label">标签：</span>
    <span 
      v-for="tag in tags" 
      :key="tag"
      :class="['tag-item', { active: tag === selectedTag }]"
      @click="handleTagClick(tag)"
    >
      {{ tag }}
    </span>
    <span 
      v-if="selectedTag"
      class="tag-item clear-tag"
      @click="handleTagClick('')"
    >
      清除
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 移除TS类型，改为JS的props定义
const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  selectedTag: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select'])

const handleTagClick = (tag) => {
  emit('select', tag)
}
</script>