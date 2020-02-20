<template>
  <component
    :is="type"
    :to="to"
    class="button"
  >
    <slot />
  </component>
</template>

<script>
import Link from '~/components/Link.vue';

export default {
  name: 'Button',
  components: {
    Link,
  },
  props: {
    to: {
      required: false,
      default: '',
      type: String,
    },
  },
  computed: {
    isLink() {
      console.log(this.to);
      return this.to.length;
    },
    type() {
      return this.isLink ? 'Link' : 'button';
    },
  },
};
</script>

<style scoped>
  .button {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: var(--spacing-xs) var(--spacing-md);
    background-color: transparent;
    color: currentColor;
    border: 2px solid currentColor;
    border-radius: var(--spacing-xs);
  }
</style>
