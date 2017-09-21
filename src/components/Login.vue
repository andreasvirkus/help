<template>
  <button @click="console.log('Login')">Login</button>
</template>

<script>
  export default {
    name: 'login',
    created() {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.$router.push('/success')
            console.log('authenticated:', user)
          } else this.$router.push('/auth')
        })
      }
    },
    mounted() {
      const uiConfig = {
        signInSuccessUrl: '/success',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
      const firebaseui = require("firebaseui");
      const ui = new firebaseui.auth.AuthUI(firebase.auth());

      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }
</script>

<style>
  button {
    background: none;
    border: 1px solid #fafafa;
    padding: .8em 2em;
    font-size: 1em;
  }
  button:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.4);
  }
</style>