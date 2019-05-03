<template>
  <div class="side-panel-header">
    <div class="d-flex align-items-center">
      <h2 class="subtitle mb-0 p-0 flex-grow-1" style="font-size: 30px;">
        {{ name }}
      </h2>
      <font-awesome-icon
        :icon="['fas', 'times']"
        @click="$emit('close-side-panel')"
      />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Side Panel'
    }
  }
}
</script>
