<template>
  <div id="app" class="app-wrapper">
    <nav>
      <h2><img class="heading-logo" src="/../assets/logo.svg"> {{ title }}</h2>
    </nav>

    <main>
      <h1><img class="heading-logo" src="/../assets/logo.svg"> {{ title }}</h1>
      <h2>Popular companies</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Transferwise</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Pipedrive</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitlab</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Taxify</a></li>
      </ul>
    </main>

    <footer>C 2017 Help</footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'app',
    data () {
      return {
        title: 'Help'
      }
    },
    components: { Navbar }
  }
</script>

<style>
.app-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}

h1, h2 {
  font-weight: normal;
}

.heading-logo {
  height: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
