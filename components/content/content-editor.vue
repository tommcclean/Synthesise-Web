<template>
  <side-panel slide-direction="right" ref="sidePanel" :show="showContentEditor">
    <side-panel-header :name="panelHeading" v-on:close="close" />
    <div class="input-section">
      <p>Title</p>
      <input />
    </div>
    <div class="input-section">
      <p>Link</p>
      <input />
    </div>
  </side-panel>
</template>

<script>
import sidePanel from '@/components/configuration/side-panel.vue'
import sidePanelHeader from '@/components/configuration/side-panel-header.vue'

export default {
  components: {
    sidePanel,
    sidePanelHeader
  },
  computed: {
    panelHeading() {
      const title = this.$store.state.content.tile.title

      if (!title && title === '') {
        return 'Add Content'
      }

      return 'Edit Content'
    },
    showContentEditor() {
      return this.$store.state.content.show
    }
  },
  methods: {
    close() {
      this.$store.dispatch('content/toggleContentEditor')
    }
  }
}
</script>
