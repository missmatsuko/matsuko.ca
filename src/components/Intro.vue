<template>
  <div class="intro">
    <div class="container rich-text">
      <h1 v-if="title" v-text="title" />
      <p v-if="description" v-text="description" />
    </div>
  </div>
</template>

<page-query>
</page-query>

<script>
  export default {
    name: 'Intro',
    props: {
      title: {
        required: true,
        default: '',
        type: String,
      },
      description: {
        required: false,
        default: '',
        type: String,
      },
    },
  };
</script>

<style scoped>
  .intro {
    background-color: black;
    color: var(--color-secondary);
    display: flex;
    align-items: flex-end;
    padding: var(--spacing-xl) 0;
    min-height: 40vh;
    margin-bottom: var(--spacing-xl);
  }
</style>
