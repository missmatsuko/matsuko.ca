<template>
  <div
    class="grid"
    :style="{
      '--grid-columns': columns,
      '--grid-gap': gap,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    columns: {
      required: false,
      type: Number,
      default: 1,
    },
    gap: {
      required: false,
      type: String,
      default: 'var(--spacing-md)',
    },
  }
};
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--grid-gap);
  }

  @media only screen and (min-width: 500px) {
    .grid {
      grid-template-columns: repeat(var(--grid-columns), 1fr);
    }
  }
</style>
