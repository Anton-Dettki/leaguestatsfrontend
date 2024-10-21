<template>
  <v-card v-for="(account, index) in dataStore.items" d-flex variant="tonal" class="ma-10 pa-4" style="border-radius: 10px">
    <v-card-title style="display: flex">
      <img :src="require(`@/assets/dragontail-14.10.1/14.10.1/img/profileicon/${account.profileIconId}.png`)" alt="Profile Icon" class="img"/>
      <div style="align-content: center; padding-left: 10px">
      {{ account.gameName }} - {{ account.tagLine }}
      <v-card-subtitle>Level: {{account.level }}</v-card-subtitle>
      </div>
    </v-card-title>
    <div class="statsWrapper ml-5">
      <v-divider :thickness="3" style="padding: 10px"/>
      <div class="stats pl-8">
        <div class="kda mr-10">
          <ul>
            <li> <strong>Kills: </strong> {{ account.killsTotal }}</li>
            <li> <strong>Deaths: </strong>  {{ account.deathsTotal }}</li>
            <li> <strong>Assists: </strong>  {{ account.assistsTotal }}</li>
            <li> <strong>KD/A: </strong>  {{ account.kda }}</li>
          </ul>
        </div>
          <div class="matches">
            <ul>
              <li> <strong>Wins: </strong>  {{ account.wins }}</li>
              <li> <strong>Losses: </strong>  {{ account.losses }}</li>
              <li> <strong>Games: </strong>  {{ account.games }}</li>
            </ul>

          </div>
        </div>
    </div>
  </v-card>
</template>

<script setup>
import {useDataStore} from "@/stores/dataStore";

const dataStore = useDataStore()

</script>

<style scoped>

.img{
  width: 100px;
  height: 100px;
  border-radius: 50%;

}
.stats {
  display: flex;
}

ul {
  list-style-type: none;
}



</style>