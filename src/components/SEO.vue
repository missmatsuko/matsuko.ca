<template>
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
  name: 'SEO',
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      default: 'Front-end web developer, and sometimes designer. Focused on accessibility. Usually located in Vancouver.',
      type: String,
    },
    path: {
      required: false,
      default: '',
      type: String,
    },
    imagePath: {
      required: false,
      default: '/default-seo.png',
      type: String,
    },
  },
  computed: {
    siteUrl() {
      return this.$static.metadata.siteUrl;
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content: this.description,
        },

        // Open Graph (Facebook)
        {
          property: "og:title",
          content: this.title,
        },
        {
          property: "og:description",
          content: this.description,
        },
        {
          property: "og:image",
          // og:image (1200 x 630) for Facebook
          // https://developers.facebook.com/docs/sharing/webmasters/images
          content: cloudinaryUrl(this.siteUrl,
            this.imagePath,
            {
              width: 1200,
              height: 630,
            },
          ),
        },
        {
          property: "og:url",
          content: `${this.siteUrl}${this.path}`,
        },

        // Twitter Cards tags
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:image",
          // aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels
          // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
          content: cloudinaryUrl(this.siteUrl,
            this.imagePath,
            {
              width: 1200,
              height: 600,
            },
          ),
        },
        {
          name: "twitter:description",
          content: this.description,
        },
        {
          name: "twitter:site",
          content: "@missmatsuko",
        },
      ],
    };
  }
};
</script>
