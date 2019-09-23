<template>
  <Layout>
    <section>
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">
        <Excerpt
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :headline="edge.node.title"
          :subheadline="edge.node.date"
          :body="edge.node.description"
          :url="edge.node.path"
        />
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
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Excerpt,
    Intro,
  },
  data: () => ({
    title: 'Blog',
    description: 'Things I\'ve written.',
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
