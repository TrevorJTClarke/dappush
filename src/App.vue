<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

body {
  background: #dff1ea;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
</style>
