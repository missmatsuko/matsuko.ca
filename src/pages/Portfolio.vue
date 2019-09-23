<template>
  <Layout>
    <section class="portfolio">
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">
        <Grid
          :columns="3"
          gap="var(--spacing-lg)"
        >
          <div v-for="edge in $page.posts.edges" :key="edge.node.id">
            <Card
              :url="edge.node.path"
              :image="edge.node.thumbnail"
              :colors="edge.node.colors"
              :headline="edge.node.title"
              :subheadline="edge.node.projectType"
            />
          </div>
        </Grid>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPortfolio(sortBy: "date", order: DESC) {
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
import Grid from '~/components/Grid.vue';
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Card,
    Grid,
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
