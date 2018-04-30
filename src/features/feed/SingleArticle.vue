<template>
  <transition name="slide-fade">  
    <div v-if="selectedArticle" class="article">
      <h2 ref="articleTitle" class="article__title">{{ selectedArticle.title }}</h2>
      
      <div v-html="selectedArticle.content" />
      
      <a :href="articleLink" target="_blank" rel="noopener">View original. <i class="fas fa-external-link-alt" /></a>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SingleArticle',

  computed: {
    ...mapState(['selectedArticle']),

    articleLink() {
      if (!this.selectedArticle) return ''
      let { guid, link } = this.selectedArticle

      return guid ? guid : link
    }
  }
};
</script>
