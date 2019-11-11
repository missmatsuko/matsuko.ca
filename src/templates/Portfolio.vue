<template>
  <Layout>
    <SEO
      :title="entry.title"
      :description="entry.description"
      :path="entry.path"
    />

    <Intro
      :title="entry.title"
      :description="entry.description"
      :image="entry.thumbnail"
    >
      <div class="rich-text">
        <h2 class="sr-only">Details</h2>

        <div v-if="entry.links.length">
          <h3>Links</h3>
          <ul class="list-reset">
            <li v-for="link in entry.links">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div v-if="entry.technologies.length">
          <h3>Technologies</h3>
          <ul class="list-reset">
            <li v-for="technology in entry.technologies">
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </Intro>

    <div class="container container--narrow">
      <div class="rich-text" v-html="entry.content"/>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: portfolio (path: $path) {
    path
    title
    description
    thumbnail
    content
    technologies
    links {
      text
      url
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
  computed: {
    entry() {
      return this.$page.post;
    }
  },
};
</script>
