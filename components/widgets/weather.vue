<template>
  <h2 class="weather subtitle d-flex align-items-center">
    <font-awesome-icon :icon="['fas', 'sun']"></font-awesome-icon>
    <span>21c in Bristol, UK</span>
  </h2>
</template>

<style>
.weather.subtitle {
  margin: 0;
  color: white;
}

.weather svg {
  margin-right: 15px;
}
</style>
