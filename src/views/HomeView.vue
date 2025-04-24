<template>
  <div class="w-full flex flex-col justify-center items-center">
    <Header :handle-function="showRef" :current-ref="currentRef" />
    <div class="w-full">
      <div ref="home" class="w-full h-screen">
        <HomeSection />
      </div>
      <div ref="about" class="w-full">
        <AboutSection />
      </div>
      <div ref="skill" class="w-full">
        <SkillSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Header from '@/components/Header.vue';
import AboutSection from '@/sections/AboutSection.vue';
import HomeSection from '@/sections/HomeSection.vue';
import SkillSection from "@/sections/SkillSection.vue";


const currentRef = ref<string | null>('home')
const home = ref<HTMLElement | null>(null)
const about = ref<HTMLElement | null>(null)
const skill = ref<HTMLElement | null>(null)
const showRef = (ref: string) => {
  const refs: Record<string, HTMLElement | null> = { home: home.value, about: about.value, skill:skill.value }
  refs[ref]?.scrollIntoView({ behavior: 'smooth' })
  currentRef.value = ref
}

</script>

<style scoped></style>