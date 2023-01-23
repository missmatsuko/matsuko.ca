<template>
  <div class="intro">
    <div class="container container--extra-narrow rich-text">
      <CloudinaryImage
        class="image"
        v-if="imagePath"
        :imagePath="imagePath"
        :transforms="[
          {
            width: 100,
            height: 100,
          },
          {
            width: 250,
            height: 250,
          },
          {
            width: 500,
            height: 500,
          },
        ]"
        :width="100"
        :height="100"
      />
      <h1 v-if="title" v-text="title" />
      <p v-if="description" v-text="description" />

      <div class="details" v-if="!!$slots.default">
        <slot />
      </div>
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
      imagePath: {
        required: false,
        default: '',
        type: String,
      }
    },
  };
</script>

<style scoped>
  .intro {
    text-align: center;
    padding: var(--spacing-xxl) 0;
  }

  .image {
    width: 100px;
    border-radius: var(--spacing-xs);
    box-shadow: var(--box-shadow);
    border: 1px solid var(--color-gray-extra-light);
    overflow: hidden;
    display: inline-block;
  }

  p {
    font-size: larger;
    color: var(--color-gray-dark);
  }

  .details {
    font-size: smaller;
    margin: var(--spacing-lg) auto 0;
    max-width: 300px;
  }

  .details h3 {
    margin-bottom: var(--spacing-xs);
  }

  .details ul {
    margin: 0;
  }

  .details li {
    display: inline-block;
    padding: 0 var(--spacing-xs);
  }

  .details h3 {
    color: var(--color-gray-dark);
  }
</style>
