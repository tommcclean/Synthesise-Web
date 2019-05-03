<template>
  <overlay v-if="show" v-on:interacted="show = false">
    <div class="side-panel" v-bind:class="additionalClasses">
      <slot></slot>
    </div>
  </overlay>
</template>

<script>
import overlay from '@/components/display/overlay.vue'

export default {
  components: {
    overlay
  },
  props: {
    slideDirection: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    additionalClasses() {
      if (this.slideDirection === 'left') {
        return 'animated slideInLeft animate-fast left'
      }
      return 'animated slideInRight animate-fast right'
    }
  }
}
</script>

<style lang="scss">
.side-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 350px;
  color: black;
  padding: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
}

.side-panel.left {
  left: 0;
}

.side-panel.right {
  right: 0;
}
</style>
