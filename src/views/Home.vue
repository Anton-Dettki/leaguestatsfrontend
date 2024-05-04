<template>
  <v-card>
    <v-data-table
        disable-pagination
        hide-default-footer
        :loading="dataStore.isBusy"
        :headers="headers"
        :items="dataStore.items"
    >
      <template #bottom></template>
    </v-data-table>
  </v-card>

  <v-btn
    :disabled="dataStore.isBusy"
    @click="async() => { await dataStore.updateData(); dataStore.calculateAdvanced() }">
      Update
  </v-btn>
  <v-btn
    @click="advancedData">
    {{ advancedToggle ? 'Normal' : 'Advanced'}}
  </v-btn>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { useDataStore } from "@/stores/dataStore";

const dataStore = useDataStore()

const advancedToggle = ref(false)

const headers = ref([
  { title: 'Account', value: 'gameName'},
  { title: 'Kills', value: 'killsTotal', sortable: true },
  { title: 'Deaths', value: 'deathsTotal', sortable: true },
  { title: 'Wins', value: 'wins', sortable: true },
  { title: 'Losses', value: 'losses', sortable: true }
])

onMounted(  () => {
  dataStore.getAllAccounts()
})

function advancedData(){

  dataStore.calculateAdvanced()
  advancedToggle.value = !advancedToggle.value

  if(advancedToggle.value) {
    headers.value.push({title: 'Assists', value: 'assistsTotal', sortable: true})
    headers.value.push({title: 'K/D', value: 'kda', sortable: true})
    headers.value.push({title: 'Games', value: 'games', sortable: true})

  } else {
    headers.value = headers.value.slice(0, 5)
  }
}
</script>

<style scoped>

</style>