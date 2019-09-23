<template>
  <header class="header">
    <div class="container">
      <Link to="/" class="logo">
        m<span class="sr-only">atsuko</span>.<span class="sr-only">ca</span>
      </Link>

      <nav class="nav">
        <ul class="nav-list">
          <li v-for="item in items">
            <Link :to="item.to" v-text="item.text" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          to: '/',
          text: 'Home',
        },
        {
          to: '/portfolio',
          text: 'Portfolio',
        },
        {
          to: '/blog',
          text: 'Blog',
        },
      ],
    }),
  };
</script>

<style scoped>
  .header {
    background: var(--color-secondary);
    border-bottom: 1px solid var(--color-gray-extra-light);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 250%;
    line-height: 1;
    font-weight: bold;
  }
  .nav {

  }
  .nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .nav a {
    display: block;
    padding: var(--spacing-md);
    font-weight: bold;
    text-transform: lowercase;
    display: flex;
    border: 4px solid transparent;
    border-left: none;
    border-right: none;
  }
  .nav a.active--exact {
    border-bottom-color: var(--color-gray-light);
  }
  a {
    text-decoration: none;
  }
</style>
