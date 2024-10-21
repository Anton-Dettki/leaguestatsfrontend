<template>
  <v-app-bar app density="compact">
    <v-app-bar-title>
      <v-btn @click="switchTab('Home')">League Stats</v-btn>
      <v-btn @click="switchTab('Cards')">Cards</v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>


const emit = defineEmits(['tab-changed'])

function switchTab(tab) {
  emit('tab-changed', tab)
}

</script>

<style scoped>

</style>