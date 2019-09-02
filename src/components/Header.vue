<template>
  <header>
    <g-link to="/">Home</g-link>

    <nav>
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
    </nav>
  </header>
</template>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }
</style>
