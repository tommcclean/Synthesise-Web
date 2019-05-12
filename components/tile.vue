<template>
  <div class="tile-item" v-bind:style="'background-color: ' + colour" v-on:click="interact">
    <img v-if="icon" :src="icon" style="width: 32px; height: 32px;" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    colour: {
      type: String,
      default: 'blue'
    },
    title: {
      type: String,
      default: 'Google'
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    interact() {
      window.open(this.url, '_blank')
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
