<template>
  <div class="home">
    <div class="intro-header">
      <h1>Demo section!</h1>
      <a href="/">Go Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      peer: null,
      conn: null
    }
  },

  methods: {
    peerConnect() {
      // this.peer = new Peer(null, { debug: 2 })
      this.peer = new window.Peer(null, {
        debug: 2,
        host: 'localhost',
        port: '1337',
        path: '/peers'
      })

      this.peer.on('open', id => {
        console.log('open: id', id)
      })

      this.peer.on('connection', c => {
        if (this.conn) return
        console.log('conn')
        this.conn = c
        this.listen()
      })

      this.peer.on('close', () => {
        console.log('close')
        this.conn = null
      })

      this.peer.on('error', err => {
        console.log('error', err)
      })
    },
    listen() {
      this.conn.on('data', data => {
        console.log('data', data)
      })
    }
  },

  mounted() {
    // TODO: Remove :)
    this.peerConnect()
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 40px;
  font-size: 16pt;
}
</style>
