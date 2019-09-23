<template>
  <Layout>
    <section>
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">
        <Grid
          :columns="3"
          gap="var(--spacing-lg)"
        >
          <div v-for="item in items" :key="item.id">
            <Card
              :url="item.path"
              :image="item.thumbnail"
              :colors="item.colors"
              :headline="item.title"
              :subheadline="item.projectType"
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
  computed: {
    items() {
      return this.$page.posts.edges.map(edge => edge.node);
    }
  },
  data: () => ({
    title: 'Portfolio',
    description: 'Things I\'ve made.',
  }),
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Web development and design projects by Matsuko Friedland.',
        }
      ],
    }
  },
}
</script>
