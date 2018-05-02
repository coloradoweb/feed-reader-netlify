<template>
  <div v-if="article" class="article" tabindex="-1">
    <h2 class="mb-4">{{ article.title }}</h2>
    
    <div class="mb-4" v-html="article.content" />
    
    <a
      :href="article.link"
      target="_blank"
      rel="noopener"
      class="inline-block bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 no-underline"
    >
      View original
    </a>
  </div>
</template>

<script>
export default {
  name: 'SingleArticle',
  
  props: ['article'],
  
  watch: {
    article: {
      immediate: true,
      handler() {
        if (this.article) {
          this.$nextTick(() => {
            this.$el.focus()
            window.scroll(0, 0)
          })
        }
      }
    }
  }
}
</script>

<style>
.article p {
  margin-bottom: .8em;
}

.article pre,
.article h2,
.article h3,
.article h4 {
  margin-bottom: 1em;
}
</style>
