<template>
  <div id="app" class="app-wrapper">
    <main id="js-main">
      <navbar></navbar>

      <router-view></router-view>

      <scroll-arrow></scroll-arrow>
    </main>

    <foot></foot>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Foot from './components/Footer.vue'
  import ScrollArrow from './components/ScrollArrow.vue'

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
  background-color: #223;
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
  color: #fafafa;
}

main .content-wrapper {
  width: 100%;
  max-width: 40em;
  margin: 3em auto;
}

body.tight main {
  transform: translateY(-60px) scale(0.9);
  cursor: pointer;
}

h1 {
  font-weight: normal;
  display: block;
  font-size: 2em;
  margin: 0.7em 0;
  font-weight: bold;
}

h2 {
  margin: 0.85em 0;
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
  color: #c29ef3;
  text-decoration-skip: ink;
}

p {
  margin: 1em 0;
}
</style>
