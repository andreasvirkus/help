<template>
  <header id="app">
    <h2><Logo class="heading-logo" /> Help</h2>

    <nav>
      <a href="#">Companies</a>
      <a href="#">Salaries</a>

      <login></login>
    </nav>
  </header>
</template>

<script>
  import Logo from '../assets/ico/logo.svg'
  import Login from './Login.vue'

  export default {
    name: 'navbar',
    components: { Logo, Login },
  }
</script>

<style>
  header {
    display: flex;
    padding: 1em 4em;
    background-color: #223;
    color: #fafafa;
    align-items: baseline;
    box-shadow: 0px 2px 55px rgba(0, 0, 0, 0.5);
  }

  nav {
    margin-left: auto;
  }

  nav * {
    color: #fafafa;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
  }

  nav *:hover {
    color: #999;
  }

  nav * + * {
    display: inline-block;
    margin-left: .8em;
  }
</style>
