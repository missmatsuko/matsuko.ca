<template>
  <Layout>
    <SEO
      :title="entry.title"
      :description="entry.description"
      :path="entry.path"
      :imagePath="entry.image.path"
    />

    <Intro
      :title="entry.title"
      :description="entry.date"
    />

    <div class="container container--narrow">
      <figure class="cover" v-if="entry.image.path">
        <CloudinaryImage
          class="cover-image"
          :imagePath="entry.image.path"
          :alt="entry.image.alt"
          :width="entry.image.width"
          :height="entry.image.height"
        />
        <figcaption
          class="cover-caption"
          v-if="entry.image.caption"
          v-html="entry.image.caption"
        />
      </figure>

      <div class="rich-text" v-html="entry.content"/>
    </div>

    <Banner
      headline="Get in touch!"
      subheadline="Want to work together? Have a burning question or thoughtful comment?"
      body="Send me an email to start the conversation!"
      url="mailto:info@matsuko.ca"
      cta="Email me"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blog (path: $path) {
    path
    title
    description
    image {
      path
      alt
      width
      height
      caption
    }
    content
    date(format: "MMMM Do, YYYY")
  }
}
</page-query>

<script>
import Intro from '~/components/Intro.vue';
import Banner from '~/components/Banner.vue';

export default {
  components: {
    Banner,
    Intro,
  },
  computed: {
    entry() {
      return this.$page.post;
    }
  },
};
</script>

<style scoped>
  .cover {
    margin-bottom: var(--spacing-xxl);
    width: 100%;
  }
  .cover-image {
    border-radius: var(--spacing-xs);
    box-shadow: var(--box-shadow);
    border: 1px solid var(--color-gray-extra-light);
    overflow: hidden;
    width: 100%;
  }
  .cover-caption {
    margin-top: var(--spacing-md);
    font-size: smaller;
    color: var(--color-gray-extra-dark);
  }
</style>
