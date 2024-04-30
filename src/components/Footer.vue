<template>
  <v-footer app>

    <v-btn href="https://github.com/carrotFarmer78">
      <v-icon icon="fab fa-github"/>
    </v-btn>
    <v-btn
        variant="plain"
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="setCurrentTab(tab)"
    >
      {{ tab }}
    </v-btn>


    <v-spacer></v-spacer>
    <span>&copy; 2024</span>
  </v-footer>
</template>

<script setup>

import {defineEmits, shallowRef} from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const currentTab = shallowRef("Home")

const tabs = {
  'Home': String,
  'About': String,
  'Contact': String
}


const emit = defineEmits(['tab-changed'])

function setCurrentTab(tab) {
  currentTab.value = tab
  emit('tab-changed', tab)
}

</script>

<style scoped>
.tab-button {
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
}

</style>