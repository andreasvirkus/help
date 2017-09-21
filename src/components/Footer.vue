<template>
  <footer>
    <p>Hi, mum! I'm a footer.</p>
    <p>&copy; Helpie | 2017</p>
  </footer>
</template>

<script>
  import Logo from '../assets/ico/logo.svg';

  export default {
    name: 'foot',
    components: { Logo },
  }
</script>

<style>
  footer {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    min-height: 200px;
    font-weight: bold;
    color: #FFF;
    font-size: 2.125rem;
    /*font-family: "Raleway", sans-serif;*/
    padding-top: 40px;
  }
</style>
