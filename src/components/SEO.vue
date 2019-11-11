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
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}${this.path}`,
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
