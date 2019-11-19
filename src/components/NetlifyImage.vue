<template>
  <div class="netlify-image">
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
  export default {
    name: 'NetlifyImage',
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
      nfResize() {
        return this.transforms.every(transform => transform.width && transform.height) ? 'smartcrop' : 'fit';
      },
      src() {
        return `${this.$static.metadata.siteUrl}/images${this.imagePath}`;
      },
      srcset() {
        return this.transforms
          .map(transform =>
            `${this.src}?nf_resize=${this.nfResize}${transform.width ? `&w=${transform.width}` : ''}${transform.height ? `&h=${transform.height}` : '' } ${transform.width ? `${transform.width}w` : ''}`
          )
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
