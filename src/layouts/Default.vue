<template>
  <div class="layout">
    <Header />
    <main>
      <slot/>
    </main>
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

  export default {
    components: {
      Header,
    },
  };
</script>

<style>
  html,
  body,
  .layout {
    height: 100%;
  }

  body {
    margin: 0;
  }

  .layout {
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
</style>
