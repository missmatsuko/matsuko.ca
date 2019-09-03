<template>
  <Layout>
    <section class="container">
      <h1>Blog</h1>

      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2>{{ edge.node.title }}</h2>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlog {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>
