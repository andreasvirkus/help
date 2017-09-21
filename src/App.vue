<template>
  <div id="app" class="app-wrapper">
    <navbar></navbar>

    <main>
      <h1>Transparent.</h1>

      <p>Help tries to bring transparency to the work cultures and salaries of different companies.

Uses LinkedIn or GitHub to validate that the user worked/works at the organization.

<strong>All reviews are anonymous!</strong> The authentication is only used for the active session and does not persist.</p>

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
*, *::before, *::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.app-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app-wrapper,
.app-wrapper > * {
  text-align: center;
}
.app-wrapper > * > * {
  text-align: initial;
}

main {
  flex: 1;
  width: 100%;
  max-width: 40em;
  margin: 0 auto;
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
  color: #223;
  text-decoration-skip: ink;
}
</style>
