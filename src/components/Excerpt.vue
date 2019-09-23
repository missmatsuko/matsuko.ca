<template>
  <div
    class="excerpt nested-link rich-text"
  >
    <h2>{{ headline }}</h2>
    <p v-if="subheadline">{{ subheadline }}</p>
    <p v-if="body">{{ body }}</p>
    <Link
      :to="url"
      :aria-label="`Read more about ${ headline }`"
    >
      Read more
    </Link>
  </div>
</template>

<script>
export default {
  name: 'Excerpt',
  props: {
    url: {
      required: true,
      type: String,
    },
    headline: {
      required: true,
      type: String,
    },
    subheadline: {
      required: false,
      default: '',
      type: String,
    },
    body: {
      required: false,
      default: '',
      type: String,
    },
  }
};
</script>

<style scoped>
  .excerpt {
    padding: var(--spacing-lg);
    box-shadow: var(--box-shadow);
    border: 1px solid var(--color-gray-extra-light);
    border-radius: var(--spacing-xs);
  }
</style>
