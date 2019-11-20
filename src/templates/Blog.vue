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
        <NetlifyImage
          class="cover-image"
          :imagePath="entry.image.path"
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

export default {
  components: {
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
