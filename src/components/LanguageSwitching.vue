<template>
    <select v-model="selectedLang" class="border-2 rounded-lg w-[50px]"  @change="changeLang">
        <option value="en" :class="isLightTheme ?'bg-white text-black' : 'bg-black text-white'">En</option>
        <option value="vi" :class="isLightTheme ?'bg-white text-black' : 'bg-black text-white'">Vi</option>
    </select>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const appStore = useAppStore()
const { isLightTheme } = storeToRefs(appStore)

const { locale } = useI18n()
const selectedLang = ref(locale.value)

const changeLang = () => {
  locale.value = selectedLang.value
  localStorage.setItem('locale', selectedLang.value)
}

</script>