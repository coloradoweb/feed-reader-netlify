<template>
  <transition name="fade">
    <vue-loading :active="isLoading"></vue-loading>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'

export default {
  name: 'Loading',
  
  components: { VueLoading },

  computed: mapState(['isLoading'])
}
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}

svg {
  font-size: 2em;
  color: var(--c-primary);
  margin-bottom: 20px;
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
