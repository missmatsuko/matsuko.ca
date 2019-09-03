<template>
  <Layout>
    <section class="container">
      <h1>Portfolio</h1>

      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2>{{ edge.node.title }}</h2>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPortfolio {
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
    title: 'Portfolio'
  }
}
</script>
