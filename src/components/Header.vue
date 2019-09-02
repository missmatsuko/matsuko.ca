<template>
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link class="nav__link" to="/">Home</Link>
      <Link class="nav__link" to="/portfolio">Portfolio</Link>
      <Link class="nav__link" to="/blog">Blog</Link>
      <Link class="nav__link" to="/about">About</Link>
    </nav>
  </header>
</template>

<script>
  import Link from '~/components/Link.vue';

  export default {
    components: {
      Link,
    },
  };
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }
</style>
