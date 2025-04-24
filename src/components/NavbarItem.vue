<template>
    <div @mouseenter="isHover = true" @mouseleave="isHover = false" @click="() => onHandle(props.item.ref)">
        <button class="w-full flex-col cursor-pointer">
            <div href="/" class="text-[16px]">{{ t(props.item.name) }}</div>
            <div class="hidden xl:flex h-[4px] transition-all duration-300" :class="[isHover || isCurrent ? 'w-full' : 'w-0', isLightTheme ?'bg-[#1F1F1F]' :'bg-white']" ></div>
        </button>
    </div>
</template>

<script setup lang="ts">
import type { NavbarItem } from '@/statics/Navbaritem';
import { useI18n } from 'vue-i18n';
import { ref } from "vue"
import { useAppStore } from '@/stores/AppStore';
import { storeToRefs } from 'pinia';
const appStore = useAppStore()
const { isLightTheme } = storeToRefs(appStore)

const { t } = useI18n()

const isHover = ref<boolean>()


export interface NavbarItemProps {
    item: NavbarItem
    onHandle: (section: string) => void
    isCurrent : boolean
}



const props = defineProps<NavbarItemProps>()
</script>

<style scoped></style>