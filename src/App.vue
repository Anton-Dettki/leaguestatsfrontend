<template>
<v-app>
  <Header app @tab-changed="switchTab"></Header>

  <v-main app>
    <v-container>
      <Home v-if="currentTab === 'Home'"/>
    </v-container>
  </v-main>


    <Footer></Footer>


</v-app>
</template>

<script setup>
import { ref } from "vue";

import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";

const currentTab = ref("Home")

function switchTab(tab) {
  console.log(tab)
  currentTab.value = tab
}
</script>

<style>
</style>
