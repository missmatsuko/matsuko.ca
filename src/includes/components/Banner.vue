<template>
  <div
    class="banner"
  >
    <div class="container rich-text">
      <h2>{{ headline }}</h2>
      <p v-if="subheadline">{{ subheadline }}</p>
      <p v-if="body">{{ body }}</p>
      <Button
        :to="url"
      >
        <span
          v-if="cta"
          v-text="cta"
        />
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Banner',
  components: {
    Button,
  },
  props: {
    url: {
      required: false,
      default: '',
      type: String,
    },
    cta: {
      required: false,
      default: '',
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
  .banner {
    padding: var(--spacing-xxl) 0;
    margin-top: var(--spacing-xxl);
    background-color: var(--color-gray-extra-light);
    text-align: center;
  }
</style>
