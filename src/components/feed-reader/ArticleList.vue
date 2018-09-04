<template>
  <div v-if="articles && articles.length" tabindex="-1">
    <h2 class="mb-4">Articles</h2>    
    <ul class="list-reset sticky pin-t border-b border-red">
      <li v-for="item in articles" :key="item.title">
        <Link
          @click.native="selectArticle(item)" 
          :isActive="isActive(item.title)"
          :linkText="item.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Link from './Link'

export default {
  name: 'ArticleList',
  
  components: { Link },
  
  props: ['articles', 'selectedArticle'],
  
  watch: {
    articles: {
      immediate: true,
      handler() {
        if (this.articles.length) {
          this.$nextTick(() => {
            this.$el.focus()
            window.scroll(0, 0)
          })
        }
      }
    }
  },

  methods: {
    selectArticle(article) {
      this.$emit('onSelectArticle', article)  
    },
    
    isActive(title) {
      if (!this.selectedArticle) return ''

      return title === this.selectedArticle.title
    }
  }
};
</script>
