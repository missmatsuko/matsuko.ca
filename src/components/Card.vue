<template>
  <Link
    class="card"
    :to="url"
    :style="{
      '--color-primary': colors.primary,
      '--color-secondary': colors.secondary,
    }"
  >

    <div class="card-image">
      <g-image
        v-if="image"
        :src="image"
        alt=""
      />
    </div>

    <div class="card-text">
      <div>
        <h2>{{ headline }}</h2>
        <p v-if="subheadline">{{ subheadline }}</p>
      </div>
    </div>

  </Link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    url: {
      required: true,
      type: String,
    },
    image: {
      required: false,
      default: '',
      type: Object,
    },
    colors: {
      required: false,
      default: () => {},
      type: Object,
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
  }
};
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: var(--spacing-xs);
    overflow: hidden;
    text-decoration: none;
    border: 1px solid var(--color-gray-extra-light);
    box-shadow: var(--box-shadow);
  }

  .card:hover .card-text,
  .card:focus .card-text {
    color: var(--color-secondary);
    background-color: var(--color-primary);
  }

  .card-image {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
  }

  .card-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card-text {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-md);
    transition: 0.3s;
  }
</style>
