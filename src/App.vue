<template>

  <Header
      @tab-changed="switchTab"
  ></Header>
  <component
      :is="currentTab"
  ></component>

</template>

<script setup>
import { shallowRef } from "vue";

import Header from "@/components/Header.vue";

//Those are the views that we want to switch between even though they are marked as not used rn, we need them
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const currentTab = shallowRef(Home)

function switchTab(tab) {
  currentTab.value = tab
}
</script>

<style>
</style>
