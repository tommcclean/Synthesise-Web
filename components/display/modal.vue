<template>
  <overlay v-if="show">
    <div class="modal-wrapper">
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
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 500px;
  width: 500px;
  background-color: white;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  padding: 20px;
  z-index: 100;
}
</style>
