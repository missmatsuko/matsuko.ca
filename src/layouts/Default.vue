<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <main class="main">
        <slot/>
      </main>
    </transition>
    <Footer />
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer,
    },
  };
</script>

<style scoped>
  .layout {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-grow: 1;
  }

  /* REF: https://gridsome.org/docs/page-transitions/ */
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }
</style>
