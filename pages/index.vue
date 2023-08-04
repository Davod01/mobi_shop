<script setup lang="ts">
import { gsap } from 'gsap'

useSeoMeta({
  title: 'فروشگاه موبایل',
  ogTitle: 'فروشگاه موبایل',
  description: 'یک فروشگاه موبایل ساده',
  ogDescription: 'یک فروشگاه موبایل ساده',
  ogLocale: 'fa_IR',
  ogImage: '/mobiles/samsung-galexy-j.jpg',
  ogUrl: '[og:url]',
  twitterTitle: 'mobi shop',
  twitterDescription: 'a shop for no one hehe',
  twitterImage: '/mobiles/samsung-galexy-j.jpg',
  twitterCard: 'summary'
})

onNuxtReady(() => {
  gsap.from('.land-slide-right', {
    scrollTrigger: {
      trigger: '.land-slide-right',
      start: 'top 70%'
      // end: 'bottom top'
      // scrub: true
    },
    x: 250,
    duration: 0.7,
    opacity: 0
  })

  gsap.from('.land-slide-left', {
    scrollTrigger: {
      trigger: '.land-slide-left',
      start: 'top 70%'
      // end: 'bottom top'
      // scrub: true
    },
    x: -250,
    duration: 0.7,
    opacity: 0
  })
})

</script>

<template>
  <div>
    <v-container fluid class="px-0 px-sm-2 px-lg-0">
      <v-row>
        <v-col cols="12" class="pa-0">
          <LandingPageCarousel />
        </v-col>

        <v-col cols="12" sm="6">
          <v-img
            src="/landing-page/1-2.jpg"
            class="land-slide-right"
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-img
            src="/landing-page/2-1.jpg"
            class="land-slide-left"
          />
        </v-col>

        <v-col cols="12">
          <LandingPageMobileSlaiderComp />
        </v-col>

        <v-col cols="12">
          <LandingPageSec3Comp />
        </v-col>

        <v-col cols="12">
          <LandingPageMobileSlaiderComp />
        </v-col>

        <v-col cols="12">
          <LandingPageBlogPosts />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
