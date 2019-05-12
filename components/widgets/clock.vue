<template>
  <h1 class="clock title">{{ time }}</h1>
</template>

<script>
export default {
  data() {
    return {
      time: null
    }
  },
  mounted() {
    this.updateClock()

    setInterval(() => {
      this.updateClock()
    }, 1000)
  },
  methods: {
    updateClock() {
      const today = new Date()
      this.time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    }
  }
}
</script>

<style>
.clock.title {
  color: white;
}
</style>
