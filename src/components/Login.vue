<template>
  <span class="login-wrapper">
    <!-- <button @click="logLogin">Login</button> -->

    <div id="firebaseui-auth-container" @click="authGitHub"></div>
  </span>
</template>

<script>
  import firebase from 'firebase'
  import { config } from '../helpers/firebaseConfig'

  export default {
    name: 'login',
    created() {
      if (!firebase.apps.length) {
        firebase.initializeApp(config)
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.$router.push('/success')
            console.log('authenticated:', user)
          } else this.$router.push('/')
        })
      }
    },
    mounted() {
      const uiConfig = {
        signInSuccessUrl: '/success',
        signInOptions: [
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ]
      }
      const firebaseui = require("firebaseui")
      const ui = new firebaseui.auth.AuthUI(firebase.auth())

      ui.start('#firebaseui-auth-container', uiConfig)
    },
    methods: {
      logLogin(evt) {
        console.log('login')
      },
      authGitHub() {
        const provider = new firebase.auth.GithubAuthProvider()

        // provider.addScope('repo');
        firebase.auth().signInWithPopup(provider).then(result => {
          // This gives you a GitHub Access Token.
          const token = result.credential.accessToken
          // The signed-in user info.
          const user = result.user;
          console.log(`${user}`)
        }).catch(error => {
          if (error.code === 'auth/account-exists-with-different-credential') {
            alert('You have signed up with a different provider for that email.')
            // Handle linking here if your app allows it.
          } else {
            console.error(`${error.code} | ${error.message}`)
          }
        });
      }
    }
  }
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
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

  span.login {
    margin-left: 0;
  }
</style>