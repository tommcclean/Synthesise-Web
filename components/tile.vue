<template>
  <div class="card tile-item" v-bind:style="'background-color: ' + tileColour">
    <img v-if="tileIcon" :src="tileIcon" style="width: 32px; height: 32px;" />
    <p>{{ tileTitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tileIcon: {
      type: String,
      default: ''
    },
    tileColour: {
      type: String,
      default: 'blue'
    },
    tileTitle: {
      type: String,
      default: 'Google'
    }
  }
}
</script>

<style>
.tile-item {
  width: 175px;
  height: 125px;
  margin: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: white;
  padding: 10px;
  font-size: 20px;
  text-align: center;
}

.tile-item:hover {
  height: 145px;
  width: 200px;
  margin: 0 2px;
}
</style>
