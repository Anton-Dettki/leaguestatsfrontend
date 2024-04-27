<template>
  <v-card>
    <v-data-table
        :headers="headers"
        :items="dataStore.items"
    ></v-data-table>
  </v-card>

  <v-btn :disabled="dataStore.isBusy" @click="async() => { await dataStore.updateData() }">
    Update
  </v-btn>

</template>

<script setup>
import { onMounted } from "vue";
import { useDataStore } from "@/stores/dataStore";

const dataStore = useDataStore()

const headers = [
  { title: 'Account', value: 'gameName'},
  { title: 'Kills', value: 'killsTotal', sortable: true },
  { title: 'Deaths', value: 'deathsTotal', sortable: true },
  { title: 'Wins', value: 'wins', sortable: true },
  { title: 'Losses', value: 'losses', sortable: true }
]

onMounted(  () => {
  dataStore.getAllAccounts()
})
</script>

<style scoped>

</style>