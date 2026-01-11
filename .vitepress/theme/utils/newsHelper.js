// 移除 TS 类型，改为纯 JS 实现
// 获取所有新闻数据
// .vitepress/theme/utils/newsHelper.js
export function getAllNews() {
  // 注意：VitePress 1.0+ 推荐使用这个路径匹配
  const pages = import.meta.glob('/news/**/*.md', { 
    eager: true,
    import: '__pageData' // 直接导入 pageData 而非整个模块
  })
  const newsList = []
  debugger;
  for (const path in pages) {
    if (path.includes('news-template.md')) continue
    
    try {
      // 直接获取 pageData
      const pageData = pages[path]
      if (!pageData || !pageData.frontmatter) continue

      const frontmatter = pageData.frontmatter
      // 后续逻辑和方案1一致（必选字段校验、标签处理、组装数据）
      if (!frontmatter.title || !frontmatter.date || !frontmatter.category) continue

      const tags = Array.isArray(frontmatter.tags) 
        ? frontmatter.tags 
        : (typeof frontmatter.tags === 'string' 
          ? frontmatter.tags.split(',').map(tag => tag.trim()).filter(tag => tag) 
          : [])

      newsList.push({
        title: frontmatter.title.trim(),
        description: frontmatter.description || '',
        date: frontmatter.date,
        category: frontmatter.category,
        tags: tags,
        author: frontmatter.author || '佚名',
        cover: frontmatter.cover || '',
        slug: path.split('/').pop().replace('.md', ''),
        path: path.replace('.md', '')
      })
    } catch (error) {
      console.error(`处理 ${path} 失败：`, error)
    }
  }

  return newsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 按分类筛选新闻
export function filterNewsByCategory(newsList, category) {
  if (!category) return newsList
  return newsList.filter(news => news.category === category)
}

// 按标签筛选新闻
export function filterNewsByTag(newsList, tag) {
  if (!tag) return newsList
  return newsList.filter(news => news.tags.includes(tag))
}

// 获取所有分类
export function getAllCategories(newsList) {
  const categories = new Set(newsList.map(news => news.category))
  return Array.from(categories)
}

// 获取所有标签
export function getAllTags(newsList) {
  const tags = new Set()
  newsList.forEach(news => news.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags)
}

// 按年月归档新闻
export function archiveNewsByDate(newsList) {
  const archive = {}
  
  newsList.forEach(news => {
    const date = new Date(news.date)
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    
    if (!archive[yearMonth]) {
      archive[yearMonth] = []
    }
    archive[yearMonth].push(news)
  })
  
  // 按年月倒序排序
  const sortedKeys = Object.keys(archive).sort((a, b) => b.localeCompare(a))
  const sortedArchive = {}
  sortedKeys.forEach(key => {
    sortedArchive[key] = archive[key]
  })
  
  return sortedArchive
}

// 分页处理
export function paginateNews(newsList, page, pageSize = 10) {
  const total = newsList.length
  const totalPages = Math.ceil(total / pageSize)
  const currentPage = Math.max(1, Math.min(page, totalPages))
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  
  return {
    items: newsList.slice(start, end),
    total,
    totalPages,
    currentPage
  }
}