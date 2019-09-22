<template>
  <Layout>
    <div class="container container--narrow">
      <div class="rich-text" v-html="$page.post.content"/>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blog (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
