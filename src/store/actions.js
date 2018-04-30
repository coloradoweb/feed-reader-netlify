import * as types from './mutation-types'
import axios from 'axios'

export default {
  getFeeds({ commit }) {
    commit(types.IS_LOADING, true)
    axios.get('/.netlify/functions/feeds').then(response => {
      commit(types.SET_FEEDS, response.data)
      commit(types.IS_LOADING, false)
    })
  },

  selectFeed({ commit, state }, feedTitle) {
    let feed = state.feeds.find(feed => feed.title === feedTitle)
    commit(types.SET_SELECTED_ARTICLE, null)
    commit(types.SET_SELECTED_FEED, feed)
  },

  selectArticle({ commit }, article) {
    commit(types.SET_SELECTED_ARTICLE, article)
  }
}
