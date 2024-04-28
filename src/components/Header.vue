<template>
  <v-app-bar app density="compact">
    <v-app-bar-title>
      <v-btn @click="switchTab">League Stats</v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>


const emit = defineEmits(['tab-changed'])
const home = "Home"

function switchTab() {
  emit('tab-changed', home)
}

</script>

<style scoped>

</style>