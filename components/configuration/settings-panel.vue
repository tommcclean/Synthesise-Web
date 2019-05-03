<template>
  <div>
    <side-panel-header name="Settings" v-on="$listeners"></side-panel-header>
    <h5 class="mb-3">Theme</h5>
    <div class="d-flex align-items-center">
      <setting-tile>
        <p class="mb-0">Light</p>
      </setting-tile>
      <setting-tile>
        <p class="mb-0">Dark</p>
      </setting-tile>
    </div>
    <hr />

    <h5 class="mb-3">Background</h5>
    <div class="d-flex align-items-center">
      <img src="~assets/background.png" class="thumbnail" width="100px" />
    </div>
    <hr />

    <h5 class="mb-3">Font</h5>
    <div class="d-flex align-items-center">
      <setting-tile>
        <p class="mb-0" style="font-family: comic-sans;">Comic Sans</p>
      </setting-tile>
      <setting-tile>
        <p class="mb-0" style="font-family: calibri;">Calibri</p>
      </setting-tile>
      <setting-tile>
        <p class="mb-0" style="font-family: segoe;">Segoe</p>
      </setting-tile>
    </div>
    <hr />

    <h5 class="mb-3">Time</h5>
    <setting-tile>
      <p class="mb-0">Light</p>
    </setting-tile>
    <hr />
  </div>
</template>

<script>
import sidePanelHeader from '@/components/configuration/side-panel-header.vue'
import settingTile from '@/components/configuration/setting-tile.vue'

export default {
  components: {
    sidePanelHeader,
    settingTile
  }
}
</script>
