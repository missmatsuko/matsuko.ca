<template>
  <Layout>
    <section>
      <Intro
        :title="title"
        :description="description"
      />

      <div class="container">

        <!-- TODO: style blog listing -->
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <h2>{{ edge.node.title }}</h2>
            <Link to="">Read more</Link>
          </li>
        </ul>

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
import Intro from '~/components/Intro.vue';

export default {
  components: {
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
