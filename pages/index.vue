<template>
  <div class="page-wrapper">
    <overlay>
      <modal>
        <p>Test</p>
      </modal>
      <navigation-bar></navigation-bar>

      <section class="container">
        <div class="text-center">
          <clock></clock>
          <weather></weather>
        </div>
      </section>

      <tile-container></tile-container>
    </overlay>
  </div>
</template>

<script>
import navigationBar from '@/components/navigation-bar.vue'
import tileContainer from '@/components/tile-container.vue'
import clock from '@/components/widgets/clock.vue'
import weather from '@/components/widgets/weather.vue'
import overlay from '@/components/display/overlay.vue'
import modal from '@/components/display/modal.vue'

export default {
  components: {
    navigationBar,
    tileContainer,
    clock,
    weather,
    overlay,
    modal
  }
}
</script>

<style>
.page-wrapper {
  background-image: url('¬~assets/background.png');
  background-size: cover;
  background-position: center center;
  height: 100vh;
}

.container {
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
