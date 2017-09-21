<template>
  <div id="app" class="app-wrapper">
    <navbar></navbar>

    <main id="js-main">
      <div class="content-wrapper">
        <h1>Transparent.</h1>

        <p>Help tries to bring transparency to the work cultures and salaries of different companies.

        <p>Uses LinkedIn or GitHub to validate that the user worked/works at the organization.</p>

        <p><strong>All reviews are anonymous!</strong> The authentication is only used for the active session and does not persist.</p>

        <h2>Popular companies</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Transferwise</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Pipedrive</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitlab</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Taxify</a></li>
        </ul>
      </div>

      <scroll-arrow></scroll-arrow>
    </main>

    <foot></foot>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Foot from './components/Footer.vue';
  import ScrollArrow from './components/ScrollArrow.vue';

  export default {
    name: 'app',
    data () {
      return {
        title: 'Help'
      }
    },
    components: { Navbar, Foot, ScrollArrow }
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
  max-width: 100%;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 100%;
  text-rendering: optimizelegibility;
}

.app-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  height: 100%;
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
  min-height: 100vh;
  transform-origin: center bottom 0px;
  transition: all 0.5s ease 0s;
  box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.5);
  will-change: transform;
}

main .content-wrapper {
  width: 100%;
  max-width: 40em;
  margin: 0 auto;
}

.app-wrapper.tight main {
  transform: translateY(-60px) scale(0.9);
  cursor: pointer;
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
