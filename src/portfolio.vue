<template>
  <Layout>
    <SEO
      title="Portfolio"
      description="Web development and design projects by Matsuko Friedland."
      path="/portfolio"
    />

    <section>
      <Intro
        title="Portfolio"
        description="Things I've made."
      />

      <div class="container">
        <Grid
          columns="3"
          gap="var(--spacing-lg)"
        >
          <div v-for="item in items" :key="item.id">
            <Card
              :url="item.url"
              :imagePath="`/${item.data.image}`"
              :colors="item.data.colors"
              :headline="item.data.title"
              :subheadline="item.data.projectType"
            />
          </div>
        </Grid>
      </div>
    </section>
  </Layout>
</template>

<script>
import Card from './includes/components/Card.vue';
import Grid from './includes/components/Grid.vue';
import Intro from './includes/components/Intro.vue';
export default {
  components: {
    Card,
    Grid,
    Intro,
  },
  computed: {
    items() {
      return this.collections.portfolioItems;
    }
  },
}
</script>
