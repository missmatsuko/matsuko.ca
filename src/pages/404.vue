<template>
  <Layout>

    <Intro
      :title="'404'"
      :description="'Sorry, this page doesn\'t exist.'"
    >
      <div class="rich-text">
        <h2 class="sr-only">Details</h2>

        <div>
          <h3>Try these links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

      </div>
    </Intro>

  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Intro,
  },
  metaInfo: {
    title: '404 page not found'
  }
}
</script>
