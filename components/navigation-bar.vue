<template>
  <div class="navigation-bar">
    <div class="left-panel">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        @click="showMenu = true"
      >
      </font-awesome-icon>
    </div>
    <div class="right-panel">
      <font-awesome-icon
        :icon="['fas', 'user-circle']"
        @click="showAccount = true"
      >
      </font-awesome-icon>
      <font-awesome-icon
        :icon="['fas', 'cog']"
        @click="showSettings = true"
      >
      </font-awesome-icon>
    </div>

    <side-panel slide-direction="left" ref="menu" :show="showMenu" v-on:close="showMenu = false">
      <div class="d-flex align-items-center">
        <h2 class="subtitle mb-0 p-0 flex-grow-1" style="font-size: 30px;">
          Menu
        </h2>
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click="showMenu = false"
        />
      </div>
      <hr />
    </side-panel>
    <side-panel slide-direction="right" ref="account" :show="showAccount" v-on:close="showAccount = false">
      <div class="d-flex align-items-center">
        <h2 class="subtitle mb-0 p-0 flex-grow-1" style="font-size: 30px;">
          Account
        </h2>
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click="showAccount = false"
        />
      </div>
      <hr />
    </side-panel>
    <side-panel slide-direction="right" ref="settings" :show="showSettings" v-on:close="showSettings = false">
      <side-panel-header name="Settings" v-on:close="showSettings = false"></side-panel-header>
      <settings-panel
        v-on:close-side-panel="toggleSidePanel(null)"
      ></settings-panel>
    </side-panel>
  </div>
</template>

<script>
import sidePanel from '@/components/configuration/side-panel.vue'
import sidePanelHeader from '@/components/configuration/side-panel-header.vue'
import settingsPanel from '@/components/configuration/settings-panel.vue'

export default {
  components: {
    sidePanel,
    sidePanelHeader,
    settingsPanel
  },
  data() {
    return {
      showMenu: false,
      showAccount: false,
      showSettings: false
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
