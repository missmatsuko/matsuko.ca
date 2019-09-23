<template>
  <Layout>
    <Intro
      :title="entry.title"
      :description="entry.date"
      :image="entry.thumbnail"
    />

    <div class="container container--narrow">
      <div class="rich-text" v-html="entry.content"/>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blog (path: $path) {
    title
    description
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
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  }
};
</script>
