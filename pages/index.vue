<script setup lang="ts">
useSeoMeta({
  title: 'فروشگاه موبایل',
  ogTitle: 'فروشگاه موبایل',
  description: 'یک فروشگاه موبایل ساده',
  ogDescription: 'یک فروشگاه موبایل ساده',
  ogLocale: 'fa_IR'
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
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-img
            src="/landing-page/2-1.jpg"
          />
        </v-col>

        <v-col cols="10" class="mx-auto">
          <LandingPageMobileSlaiderComp />
        </v-col>

        <v-col cols="12">
          <LandingPageSec3Comp />
        </v-col>

        <v-col cols="10" class="mx-auto">
          <LandingPageMobileSlaiderComp />
        </v-col>

        <v-col cols="12">
          <LandingPageBlogPosts />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
