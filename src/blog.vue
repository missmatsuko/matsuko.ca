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
            :headline="item.data.title"
            :subheadline="item.data.date"
            :body="item.data.description"
            :url="item.url"
          />
        </Grid>
      </div>
    </section>
  </Layout>
</template>

<script>
import Excerpt from './includes/components/Excerpt.vue';
import Grid from './includes/components/Grid.vue';
import Intro from './includes/components/Intro.vue';

export default {
  components: {
    Excerpt,
    Grid,
    Intro,
  },
  computed: {
    items() {
      console.log(this.collections.blogPosts[0]);
      return this.collections.blogPosts;
    }
  },
}
</script>
