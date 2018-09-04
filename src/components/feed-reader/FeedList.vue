<template>
  <div>
    <h2 class="mb-4">Feeds</h2>
    <ul v-if="feeds && feeds.length" class="list-reset sticky pin-t border-b border-red">
      <li v-for="feed in feeds" :key="feed.title">
        <Link 
          @click.native="selectFeed(feed)" 
          :isActive="isActive(feed.title)" 
          :linkText="feed.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'FeedList',
  
  components: { Link },
  
  props: ['feeds', 'selectedFeed'],

  methods: {
    selectFeed(feed) {
      this.$emit('onSelectFeed', feed)      
    },

    isActive(title) {
      if (!this.selectedFeed) return ''

      return title === this.selectedFeed.title
    }
  }
};
</script>
