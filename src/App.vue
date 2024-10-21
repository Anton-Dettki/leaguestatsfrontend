<template>
<v-app>
  <Header app @tab-changed="switchTab"></Header>

  <v-main app>
    <v-container>
      <Home v-if="currentTab === 'Home'"/>
      <About v-if="currentTab === 'About'"/>
      <Contact v-if="currentTab === 'Contact'"/>
      <Cards v-if="currentTab === 'Cards'"></Cards>
    </v-container>
  </v-main>

    <Footer @tab-changed="switchTab"></Footer>


</v-app>
</template>

<script setup>
import { ref } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Cards from "@/views/Cards.vue";

const currentTab = ref("Home")

function switchTab(tab) {
  currentTab.value = tab
}
</script>

<style>
</style>
