<template>

  <div>
    <v-btn
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="setCurrentTab(tab)"
    >
      {{ tab }}
    </v-btn>
  </div>
</template>

<script setup>
import {ref, defineEmits, shallowRef} from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const currentTab = shallowRef("Home")

const tabs = {
  'Home': Home,
  'About': About,
  'Contact': Contact
}

const emit = defineEmits(['tab-changed'])

function setCurrentTab(tab) {
  currentTab.value = tab
  emit('tab-changed', tabs[tab])
}
</script>

<style scoped>
.tab-button {
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
}

.active {
  background-color: #ccc;
  color: black;
}
</style>