<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { gsap } from 'gsap'

onNuxtReady(() => {
  gsap.from('.sec3comp-slide-left', {
    scrollTrigger: {
      trigger: '.sec3comp-slide-left',
      start: 'top 50%'
    },
    x: 300,
    opacity: 0
  })

  gsap.from('.sec3comp-slide-right', {
    scrollTrigger: {
      trigger: '.sec3comp-slide-right',
      start: 'top 50%'
    },
    x: -300,
    opacity: 0
  })

  gsap.from('.sec3comp-slide-top', {
    scrollTrigger: {
      trigger: '.sec3comp-slide-top',
      start: 'top 65%'
    },
    y: 100,
    opacity: 0
  })

  gsap.from('.sec3comp-visable', {
    scrollTrigger: {
      trigger: '.sec3comp-visable',
      start: 'top 40%'
    },
    opacity: 0
  })

  gsap.from('.sec3comp-traking-in', 1.8, {
    scrollTrigger: {
      trigger: '.sec3comp-traking-in',
      start: 'top 40%'
    },
    scaleX: 0,
    stagger: 1,
    opacity: 1
  })
})
</script>

<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="4">
      <v-img
        src="/landing-page/h2-banner5868.jpg"
        class="sec3comp-slide-right"
        min-height="100px"
        cover
      />
    </v-col>

    <v-col cols="12" sm="4">
      <v-img
        src="/landing-page/h2-banner422.jpg"
        class="sec3comp-slide-top"
        min-height="100px"
        cover
      />
    </v-col>

    <v-col cols="12" sm="4">
      <v-img
        src="/landing-page/h2-banner4565.jpg"
        class="sec3comp-slide-left"
        min-height="100px"
        cover
      />
    </v-col>

    <v-col cols="12">
      <v-img
        src="/landing-page/pf-s86-pm-0133-01-Slider.jpg"
        class="sec3comp-visable"
        min-height="300px"
        cover
      >
        <div class="w-100 h-100 d-flex">
          <div class="w-50 h-100 text-white">
            <div class="d-flex flex-column h-100 justify-center align-center mx-2">
              <h1 class="text-h3 font-weight-bold pb-1 pt-4 sec3comp-traking-in">
                تخفیف ویـــژه
              </h1>
              <p class="text-h5 font-weight-medium pt-1 pb-2 sec3comp-traking-in">
                تجربه خریدی متفاوت با شرایط استثنائی
              </p>
              <v-btn
                rounded="lg"
                class="mt-4 reveal-type"
                color="red"
              >
                مشاهده محصولات
              </v-btn>
            </div>
          </div>
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
