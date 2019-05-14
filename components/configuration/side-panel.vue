<template>
  <overlay v-if="show">
    <div class="side-panel" v-bind:class="additionalClasses">
      <slot v-on:close="$emit('close')"></slot>
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
    show: {
      type: Boolean,
      default: false
    },
    slideDirection: {
      type: String,
      default: 'left'
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

  .input-section{
    margin-bottom: 15px;
  }

  input {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px;
    width: 100%;
  }

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
