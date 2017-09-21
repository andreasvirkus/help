<template>
  <header id="app" class="app-wrapper">
    <h2><Logo class="heading-logo" /> Footer</h2>

    <nav>
      Menu | Links
    </nav>
  </header>
</template>

<script>
  import Logo from '../assets/ico/logo.svg';

  export default {
    name: 'sitemap',
    components: { Logo },
  }
</script>

<style>
  header {
    background-color: #223;
  }
</style>
