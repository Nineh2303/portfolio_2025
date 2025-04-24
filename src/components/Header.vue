<template>
  <div class="w-full  min-h-[75px] flex justify-center  fixed top-0 transition duration-1000"
    :class="[isLightTheme ? 'bg-white shadow-[#1f1f1f]' : 'bg-[#1f1f1f]  shadow-white', isScroll ? 'shadow-sm' : '']">
    <div class="w-[80%] xl:flex justify-between items-center hidden">
      <div class="flex items-end">
        <h1 class="font-bold font-[pacifico] text-[30px] ml-[25%]">Nineh</h1>
        <span class="ml-2 text-[20px] font-bold ">portfolio</span>
      </div>
      <div class="flex space-x-[25px] items-center">
        <div v-for="item in navbarItem">
          <NavbarItem :item="item" :onHandle="() => props.handleFunction(item.ref)"
            :isCurrent="currentRef === item.ref" />
        </div>
        <div class="flex space-x-[20px] ml-[150px]">
          <button class="w-[35px] h-[35px] border-[3px] rounded-lg cursor-pointer flex items-center justify-center"
            :class="isLightTheme ? ' border-black' : 'border-white'" @click="handleChangeTheme">
            <SunIcon v-if="isLightTheme" class="w-[20px] h-[20px]" />
            <MoonIcon v-else class="w-[20px] h-[20px]" />
          </button>
          <LanguageSwitching />
        </div>
      </div>
    </div>
    <div class=" w-[80%] flex flex-col items-end xl:hidden mt-[10px]">
      <div class="w-full flex justify-between items-center">
        <div class="flex items-end">
          <h1 class="font-bold font-[pacifico] text-[30px] ml-[25%]">Nineh</h1>
          <span class="ml-2 text-[20px] font-bold ">portfolio</span>
        </div>
        <div class="flex space-x-5">
 
          <button class="w-[35px] h-[35px] border-[3px] rounded-lg cursor-pointer flex items-center justify-center"
            :class="isLightTheme ? ' border-black' : 'border-white'" @click="handleChangeTheme">
            <SunIcon v-if="isLightTheme" class="w-[20px] h-[20px]" />
            <MoonIcon v-else class="w-[20px] h-[20px]" />
          </button>
          <LanguageSwitching />
          <button @click="isOpenMenu = true" class="transition-all duration-500">
            <FontAwesomeIcon icon="fa-solid fa-bars" class="text-[35px]" />
          </button>
        </div>
      </div>
      <div class="w-screen h-screen top-0 left-0 bg-black opacity-50" :class="isOpenMenu ? 'fixed' : 'hidden'"></div>
      <div class="fixed top-0 right-0 h-screen overflow-hidden transition-all duration-500 z-100 flex flex-col"
        :class="[isLightTheme ? 'bg-white' : 'bg-[#1f1f1f]', isOpenMenu ? 'w-[300px]' : 'w-0 ']">
        <div class="flex justify-end mx-[20px] mt-[5px]">
          <button @click="isOpenMenu = false" class="mr-[25px] mt-[10px]">
            <FontAwesomeIcon icon="fa-solid fa-xmark " class="text-[35px]" />
          </button>
          
        </div>
        <div class="w-full flex mt-[20px]">
            <ul class="w-full mx-[25px]">
              <li v-for="item in navbarItem" class="w-full h-[50px] border-b flex border-[#b4b4b4]">
                  <button @click="isOpenMenu=false">
                    <NavbarItem :item="item" :onHandle="() => props.handleFunction(item.ref)"
                      :isCurrent="currentRef === item.ref" />
                  </button>
              </li>
            </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { navbarItem } from '@/statics/Navbaritem';
import NavbarItem from './NavbarItem.vue';
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid"
import { useAppStore } from "@/stores/AppStore"
import { storeToRefs } from 'pinia';
import LanguageSwitching from './LanguageSwitching.vue';

import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export interface HeaderProps {
  currentRef: string | null
  handleFunction: (ref: string) => void
}
const appStore = useAppStore()
const { isLightTheme } = storeToRefs(appStore)
const isScroll = ref<boolean>(false)
const props = defineProps<HeaderProps>()
const handleChangeTheme = () => {
  appStore.changeTheme(!isLightTheme.value)
}
window.addEventListener('scroll', () => {
  if (window.scrollY == 0) {
    isScroll.value = false
  } else {
    isScroll.value = true
  }
})

const isOpenMenu = ref<boolean>(false)



</script>

<style lang="scss" scoped></style>@/stores/AppStore