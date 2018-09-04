<template>
  <div>
    <Loading :isLoading="isLoading" />
    <div v-if="!isLoading" class="feed-container">
      <FeedList
        :feeds="feeds"
        :selectedFeed="selectedFeed"
        @onSelectFeed="handleSelectFeed" 
      />
      
      <ArticleList
        :articles="articles"
        :selectedArticle="selectedArticle"
        @onSelectArticle="handleSelectArticle" 
      />
      
      <SingleArticle :article="selectedArticle" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FeedList from './FeedList.vue'
import ArticleList from './ArticleList.vue'
import SingleArticle from './SingleArticle.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'FeedReader',

  components: { ArticleList, FeedList, SingleArticle, Loading },
  
  data() {
    return {
      isLoading: false,
      feeds: [],
      articles: [],
      selectedFeed: null,
      selectedArticle: null
    }
  },

  created() {
    this.getFeeds()
  },
  
  methods: {
    async getFeeds() {
      this.isLoading = true
      
      let { data } = await axios.get('/.netlify/functions/feeds')
      
      this.feeds = data
      this.isLoading = false
    },
    
    handleSelectArticle(article) {
      this.selectedArticle = article
    },
    
    handleSelectFeed(feed) {
      this.selectedFeed = feed
      this.articles = feed.items
      this.selectedArticle = null
    }
  }
};
</script>

<style>
.feed-container {
  display: grid;
  grid-template-columns: 15% 15% auto;
  grid-gap: 20px;
}

*, ::after, ::before {
    outline: none !important;
}
</style>
