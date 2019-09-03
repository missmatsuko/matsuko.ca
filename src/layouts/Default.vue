<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot/>
    </main>
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
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-grow: 1;
  }
</style>
