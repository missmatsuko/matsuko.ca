<template>
  <Layout>
    <section class="portfolio">
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">
        <div class="grid">
          <!-- TODO: style portfolio listing -->
          <div v-for="edge in $page.posts.edges" :key="edge.node.id">
            <Card
              :url="edge.node.path"
              :image="edge.node.thumbnail"
              :colors="edge.node.colors"
              :headline="edge.node.title"
              :subheadline="edge.node.projectType"
            />
          </div>
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
        path
        title
        thumbnail
        colors {
          primary
          secondary
        }
        projectType
      }
    }
  }
}
</page-query>

<script>
import Card from '~/components/Card.vue';
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Card,
    Intro,
  },
  data: () => ({
    title: 'Portfolio',
    description: 'Things I\'ve made.',
  }),
  metaInfo: () => ({
    meta: [
      {
        key: 'description',
        name: 'description',
      }
    ],
  }),
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
</style>
