<template>
  <Layout>

    <SEO
      title="Home"
    />

    <Intro
      title="Matsuko Friedland"
      description="Creating experiences with usability and accessibility in mind."
      imagePath="/headshot.jpg"
    >
      <div class="rich-text">

        <h2 class="sr-only">Details</h2>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <Link to="mailto:hello@matsuko.ca">Email</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/matsuko/">LinkedIn</Link>
            </li>
            <li>
              <Link to="https://github.com/missmatsuko/">GitHub</Link>
            </li>
            <li>
              <Link to="https://codepen.io/missmatsuko/">CodePen</Link>
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
