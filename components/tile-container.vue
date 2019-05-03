<template>
  <div class="container">
    <tile-item
      tile-icon="https://www.google.com/favicon.ico"
      tile-colour="black"
      tile-title="Github"
    ></tile-item>
    <tile-item
      tile-icon="https://www.facebook.com/favicon.ico"
      tile-colour="blue"
      tile-title="Facebook"
    ></tile-item>
    <tile-item
      tile-icon="https://www.bbc.co.uk/favicon.ico"
      tile-colour="purple"
      tile-title="BBC"
    ></tile-item>
  </div>
</template>

<script>
import tileItem from '@/components/tile.vue'

export default {
  components: {
    tileItem
  }
}
</script>
