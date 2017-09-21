<template>
  <header id="app">
    <h2><Logo class="heading-logo" /> Help</h2>

    <nav>
      Menu | Links

      <button>Login</button>
    </nav>
  </header>
</template>

<script>
  import Logo from '../assets/ico/logo.svg';

  export default {
    name: 'navbar',
    components: { Logo },
  }
</script>

<style>
  header {
    display: flex;
    padding: 1em 4em;
    background-color: #223;
    color: #fafafa;
    align-items: baseline;
  }

  nav {
    margin-left: auto;
  }

  button {
    background: none;
    border: 1px solid #fafafa;
    color: #fafafa;
  }
</style>
