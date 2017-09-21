<template>
  <header id="app" class="app-wrapper">
    <h2><Logo class="heading-logo" /> {{ title }}</h2>

    <nav>
      Menu | Links
    </nav>
  </header>
</template>

<script>
  import Logo from '../assets/logo.svg';

  export default {
    name: 'navbar',
    components: { Logo },
  }
</script>

<style>
  header {
    background-color: #223;
  }
</style>
