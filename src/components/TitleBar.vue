<template>
  <div class="title-bar">
    <h1 class="title-bar__heading">
      Feed Reader
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style scoped>
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.title-bar__icon {
  color: var(--c-primary);
}

.title-bar__subheading,
.title-bar__heading {
  margin: 0;
}

.title-bar__source-link {
  color: var(--c-primary);
  transition: color ease 0.3s;
}

.title-bar__source-link:hover {
  color: var(--c-text);
}
</style>
