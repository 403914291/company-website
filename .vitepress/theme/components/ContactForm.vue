<template>
  <div class="contact-form">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            姓名 *
          </label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="请输入您的姓名"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            邮箱 *
          </label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="example@email.com"
          />
        </div>
      </div>
      
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          主题 *
        </label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          required
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          placeholder="请输入邮件主题"
        />
      </div>
      
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          消息内容 *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="6"
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          placeholder="请输入您的消息..."
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          :disabled="loading"
          class="btn-primary w-full md:w-auto px-8"
        >
          {{ loading ? '发送中...' : '发送消息' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  
  try {
    // 这里可以替换为实际的API调用
    console.log('表单提交:', form.value)
    
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('消息发送成功！我们将尽快与您联系。')
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    console.error('提交失败:', error)
    alert('发送失败，请稍后重试。')
  } finally {
    loading.value = false
  }
}
</script>