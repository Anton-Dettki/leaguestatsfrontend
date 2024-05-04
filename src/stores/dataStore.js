/* eslint-disable */

import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from "axios";

export const useDataStore = defineStore('data', () => {
    const items = ref([])
    const isBusy = ref(false)

    async function updateData(){
        isBusy.value = true
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/update/AllAccounts`) //TODO
        items.value = response.data
        isBusy.value = false
    }

    async function getAllAccounts(){
        isBusy.value = true
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/api/AllAccounts`) //TODO
        items.value = response.data
        isBusy.value = false
    }

    function calculateAdvanced(){
        for(let i = 0; i < items.value.length; i++){
            items.value[i].kda = (items.value[i].killsTotal + items.value[i].assistsTotal) / items.value[i].deathsTotal
            items.value[i].kda.toFixed(2)
        }
    }
    return { items, isBusy, updateData, getAllAccounts, calculateAdvanced }
} )
