<template>
  <a 
    href="#" 
    :class="linkClass"
  >
    {{ linkText }}
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['linkText', 'isActive'],
  
  computed: {
    linkClass() {
      let classes = 'no-underline p-2 block border-grey border border-b-0'
      
      if (this.isActive) {
        classes += ' bg-teal text-white'
      } else {
        classes += ' text-teal hover:bg-teal-lightest'
      }
      
      return classes
    }
  }
}
</script>

