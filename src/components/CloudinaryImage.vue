<template>
  <div class="cloudinary-image">
    <div
      class="image-wrapper"
      :style="{
        paddingBottom: `${height / width * 100}%`,
      }"
    >
      <img
        :src="src"
        :srcset="srcset"
        :alt="alt"
      />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
  import cloudinaryUrl from '~/assets/scripts/cloudinaryUrl.js';

  export default {
    name: 'CloudinaryImage',
    props: {
      alt: {
        required: false,
        default: '',
        type: String,
      },
      imagePath: {
        required: true,
        type: String,
      },
      width: {
        required: true,
        default: '',
        type: Number,
      },
      height: {
        required: true,
        default: '',
        type: Number,
      },
      transforms: {
        required: false,
        default: () => [
          {
            width: 100,
          },
          {
            width: 500,
          },
          {
            width: 1000,
          },
        ],
        type: Array,
      },
    },
    computed: {
      src() {
        return cloudinaryUrl(
          this.$static.metadata.siteUrl,
          this.imagePath,
          {
            height: this.height,
            width: this.width,
          }
        );
      },
      srcset() {
        return this.transforms
          .map(transform => `${cloudinaryUrl(
            this.$static.metadata.siteUrl,
            this.imagePath,
            {
              height: transform.height,
              width: transform.width || null,
            }
          )} ${transform.width ? `${transform.width}w` : ''}`)
          .join(', ');
      },
    },
  };
</script>

<style scoped>
  .image-wrapper {
    position: relative;
    background-color: var(--color-gray);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
