<template>
  <div class="category-filter">
    <label>分类：</label>
    <select 
      v-model="selected" 
      @change="handleChange"
      class="category-select"
    >
      <option value="">全部</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>


<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change'])

const selected = ref(props.selectedCategory)

watch(() => props.selectedCategory, (val) => {
  selected.value = val
})

const handleChange = () => {
  emit('change', selected.value)
}
</script>