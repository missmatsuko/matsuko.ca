<template>
  <Layout>
    <SEO
      title="Blog"
      description="A variety of articles by Matsuko Friedland, mainly focused on web development and design."
      path="/blog"
    />

    <section>
      <Intro
        title="Blog"
        description="Things I've written."
      />

      <div class="container">
        <Grid
          gap="var(--spacing-lg)"
        >
          <Excerpt
            v-for="item in items"
            :key="item.id"
            :headline="item.title"
            :subheadline="item.date"
            :body="item.description"
            :url="item.path"
          />
        </Grid>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlog(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        date(format: "MMMM Do, YYYY")
        title
        description
      }
    }
  }
}
</page-query>

<script>
import Excerpt from '~/components/Excerpt.vue';
import Grid from '~/components/Grid.vue';
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Excerpt,
    Grid,
    Intro,
  },
  computed: {
    items() {
      return this.$page.posts.edges.map(edge => edge.node);
    }
  },
}
</script>
