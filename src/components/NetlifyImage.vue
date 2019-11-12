<template>
  <img
    :src="src"
    :srcset="srcset"
    :alt="alt"
  />
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
      transforms: {
        required: false,
        default: () => [
          {
            width: 100,
            height: 100,
          },
          {
            width: 500,
            height: 500,
          },
          {
            width: 1000,
            width: 1000,
          },
        ],
        type: Array,
      },
    },
    computed: {
      src() {
        return `${this.$static.metadata.siteUrl}/images/${this.imagePath}`;
      },
      srcset() {
        return this.transforms
          .map(transform =>
            `${this.src}?nf_resize=smartcrop&w=${transform.width || null}&h=${transform.height || null} ${transform.width}w`
          )
          .join(', ');
      },
    },
  };
</script>
