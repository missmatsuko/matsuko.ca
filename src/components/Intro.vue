<template>
  <div class="intro">
    <div class="container container--extra-narrow rich-text">
      <g-image
        v-if="image"
        :src="image"
        alt=""
      />
      <h1 v-if="title" v-text="title" />
      <p v-if="description" v-text="description" />
      <slot />
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
      image: {
        required: false,
        default: () => {},
        type: Object,
      }
    },
  };
</script>

<style scoped>
  .intro {
    text-align: center;
    padding: var(--spacing-xl) 0;
  }

  img {
    width: 100px;
    border-radius: var(--spacing-xs);
    box-shadow: var(--box-shadow);
  }

  p {
    font-size: larger;
    color: var(--color-gray-dark);
  }
</style>
