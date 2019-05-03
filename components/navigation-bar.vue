<template>
  <div class="navigation-bar">
    <div class="left-panel">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        @click="toggleSidePanel($refs.menu)"
      >
      </font-awesome-icon>
    </div>
    <div class="right-panel">
      <font-awesome-icon
        :icon="['fas', 'user-circle']"
        @click="toggleSidePanel($refs.account)"
      >
      </font-awesome-icon>
      <font-awesome-icon
        :icon="['fas', 'cog']"
        @click="toggleSidePanel($refs.settings)"
      >
      </font-awesome-icon>
    </div>

    <side-panel slide-direction="left" ref="menu">
      <div class="d-flex align-items-center">
        <h2 class="subtitle mb-0 p-0 flex-grow-1" style="font-size: 30px;">
          Menu
        </h2>
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click="toggleSidePanel(null)"
        />
      </div>
      <hr />
    </side-panel>
    <side-panel slide-direction="right" ref="account">
      <div class="d-flex align-items-center">
        <h2 class="subtitle mb-0 p-0 flex-grow-1" style="font-size: 30px;">
          Account
        </h2>
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click="toggleSidePanel(null)"
        />
      </div>
      <hr />
    </side-panel>
    <side-panel slide-direction="right" ref="settings">
      <settings-panel
        v-on:close-side-panel="toggleSidePanel(null)"
      ></settings-panel>
    </side-panel>
  </div>
</template>

<script>
import sidePanel from '@/components/configuration/side-panel.vue'
import settingsPanel from '@/components/configuration/settings-panel.vue'

export default {
  components: {
    sidePanel,
    settingsPanel
  },
  methods: {
    toggleSidePanel(panel) {
      this.$refs.menu.show = false
      this.$refs.account.show = false
      this.$refs.settings.show = false

      if (panel) {
        panel.show = true
      }
    }
  }
}
</script>

<style lang="scss">
.navigation-bar {
  padding: 20px 20px;
  color: white;

  .left-panel {
    float: left;
  }

  .right-panel {
    float: right;
  }

  svg {
    font-size: 25px;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
