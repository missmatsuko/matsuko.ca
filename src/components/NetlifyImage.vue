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
