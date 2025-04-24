<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-[60%] flex mt-[250px]">
            <div class="w-[10%] flex flex-col space-y-[20px] mt-[50px]">
                <a v-for="social in SocialList" :href="social.link" class="cursor-pointer" target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon :icon="`fa-brands fa-${social.icon}`" class="text-[30px]" />
                </a>

            </div>

            <div class="w-[55%]">
                <h1 class="text-[30px] font-bold">{{ t('home_header') }} <p class="text-[50px]">{{ t('home_header_name')
                        }}</p>
                </h1>
                <p class="w-[60%] text-[20px] mt-[10px] border text-center rounded-lg"> {{ t('home_position') }}</p>

            </div>
            <div class="w-[35%]">
                <ImageComponent />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue';
import { SocialList } from '@/statics/SocialItem';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';


const { t } = useI18n()
</script>

<style lang="css" scoped></style>