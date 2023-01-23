<template>
  <Link
    class="card"
    :to="url"
  >
    <CloudinaryImage
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
        {
          width: 800,
          height: 800,
        },
      ]"
      :width="300"
      :height="300"
    />

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
    imagePath: {
      required: false,
      default: '',
      type: String,
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
    position: relative;
  }

  .card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 0, var(--color-primary) 80% 100%);
    max-height: 0;
    transition: 0.3s;
  }

  .card:focus {
    outline-color: var(--color-black);
  }

  .card:hover .card-text,
  .card:focus .card-text {
    color: var(--color-secondary);
  }

  .card:hover::after,
  .card:focus::after {
    max-height: 100%;
  }

  .card-text {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-md);
    transition: 0.3s;
    position: relative;
    z-index: 1;
  }
</style>
