<template>
  <Layout>
    <section>
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">
        <!-- TODO: style portfolio listing -->
        <div v-for="edge in $page.posts.edges" :key="edge.node.id">
          <h2>{{ edge.node.title }}</h2>
        </div>
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
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Intro,
  },
  data: () => ({
    title: 'Portfolio',
    description: 'Things I\'ve made.',
  }),
  metaInfo: () => ({
    title: this.title,
    meta: [
      {
        key: 'description',
        name: 'description',
        content: this.description,
      }
    ],
  })
}
</script>
