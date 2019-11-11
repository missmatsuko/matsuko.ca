<template>
  <Layout>

    <SEO
      title="Home"
    />

    <Intro
      title="Matsuko Friedland"
      description="Mostly front-end web developer, sometimes designer. Pretty much always she/her. Usually located in Vancouver."
      :image="require('~/assets/images/headshot.jpg')"
    >
      <div class="rich-text">
        <h2 class="sr-only">Details</h2>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:info@matsuko.ca">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/matsuko/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/missmatsuko/">GitHub</a>
            </li>
            <li>
              <a href="https://codepen.io/missmatsuko/">CodePen</a>
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
}
</script>
