<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/placeholder-logo-2.png" />
    </div>
    <!-- TODO: This will display loading at first -->
    <!-- <div class="address" v-if="acct">
      <span>{{ acct }}</span>
    </div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.header {
  position: fixed;
  width: 100%;
  height: 7vh;
  display: flex;
  background-color: #f9f9f9;
  justify-content: space-between;

  .logo {
    img {
      // max-width: 100%;
      max-height: 100%;
    }
  }

  .address {
    display: flex;
    span {
      color: #0e1c36;
      margin: auto 10px;
      font-size: 1vw;
    }
  }
}
</style>
