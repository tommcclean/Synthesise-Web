<template>
  <div class="container">
    <tile-item
      v-for="tile in tiles"
      v-bind:key="tile.title"
      :tile-icon="tile.icon"
      :tile-colour="tile.colour"
      :tile-title="tile.title"
    />
  </div>
</template>

<script>
import tileItem from '@/components/tile.vue'
import { mapState } from 'vuex'

export default {
  components: {
    tileItem
  },
  computed: {
    ...mapState('tiles', ['tiles'])
  }
}
</script>
