<template>
  <div :class=" isLightTheme ?  'text-[#3d3d3d] bg-white' :'bg-[#1F1F1F] text-white'"
        class="transition-all duration-1000">
    <div class="w-full h-full flex justify-center">
    <router-view />
  </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from './stores/AppStore';
const appStore = useAppStore()  
const {isLightTheme} = storeToRefs(appStore)

</script>


<style scoped></style>
