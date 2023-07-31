<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import Typed from 'typed.js'

const typejsanimation = (el1: string, el2: string) => {
  const animatedStr = new Typed(el1,
    {
      strings: ['فروشگاه موبایل موبی شاپ'],
      startDelay: 500,
      typeSpeed: 100,
      backDelay: 400,
      backSpeed: 50,
      showCursor: false,
      onComplete: () => {
        const ptyped = new Typed(el2,
          {
            strings: ['فروش تخصصی انواع موبایل و تبلت', 'بررسی تخصصی انواع موبایل و تبلت'],
            startDelay: 500,
            smartBackspace: true,
            typeSpeed: 100,
            backSpeed: 50,
            showCursor: false
          }
        )
      }
    }
  )
}
const onIntersrct = (intersect: boolean) => {
  if (intersect) {
    typejsanimation('.typejs-element-title', '.typejs-element-p')
  }// end if
}

const onIntersrct2 = (intersect: boolean) => {
  if (intersect) {
    typejsanimation('.typejs-element-title2', '.typejs-element-p2')
  }// end if
}

// onNuxtReady(() => {
//   telement()
// })
</script>

<template>
  <div>
    <v-carousel
      hide-delimiters
      reverse
      class="d-none d-sm-block"
    >
      <v-carousel-item
        src="/slider/slider01.jpg"
        cover
      >
        <div class="w-100 h-100 d-flex mx-6">
          <div class="w-50 h-100 ">
            <div class="d-flex flex-column h-100 justify-center align-center">
              <h2
                v-intersect.once="onIntersrct"
                class="text-h2 font-weight-bold pb-1 pt-4 typejs-element-title"
              >
                {{ '  ' }}
              </h2>
              <p id="telmentp" class="text-h4 font-weight-medium py-2 typejs-element-p">
                {{ '  ' }}
              </p>
              <transition name="scale-in-hor-center" appear>
                <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600" text="مشاهده محصولات" />
              </transition>
            </div>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="/slider/slider02.jpg"
        cover
      >
        <div class="w-100 h-100 d-flex">
          <div class="w-50 h-100 ">
            <div class="d-flex flex-column h-100 justify-center align-center text-white">
              <transition name="tracking-in-expand-fwd-bottom" appear>
                <h2
                  v-intersect.once="onIntersrct2"
                  class="text-h2 font-weight-bold pb-1 pt-4 typejs-element-title2"
                >
                  {{ '  ' }}
                </h2>
              </transition>
              <transition name="tracking-in-expand-fwd-top" appear>
                <p class="text-h4 font-weight-medium py-2 typejs-element-p2">
                  {{ '  ' }}
                </p>
              </transition>
              <transition name="scale-in-hor-center" appear>
                <v-btn rounded="xl" class=" mt-3 font-weight-medium btn-fw-600">
                  مشاهده محصولات
                </v-btn>
              </transition>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <v-carousel
      hide-delimiters
      cycle
      interval="4000"
      reverse
      class="d-block d-sm-none"
    >
      <v-carousel-item
        src="/slider/slidmob1.jpg"
        cover
      >
        <div class="d-flex flex-column align-center justify-start">
          <h2 class="text-h2 font-weight-bold pb-1 pt-4 mt-4">
            فروشگاه موبایل
          </h2>
          <p class="text-h5 font-weight-medium py-2">
            فروش تخصصی انواع موبایل و تبلت
          </p>
          <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600">
            مشاهده محصولات
          </v-btn>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="/slider/slidmob2.jpg"
        cover
      >
        <div class="d-flex flex-column align-center justify-start text-white">
          <h2 class="text-h2 font-weight-bold pb-1 pt-4 mt-4">
            فروشگاه موبایل
          </h2>
          <p class="text-h5 font-weight-medium py-2">
            فروش تخصصی انواع موبایل و تبلت
          </p>
          <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600">
            مشاهده محصولات
          </v-btn>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style lang="scss">
.btn-fw-600 .v-btn__content{
  font-weight: 600;
}
</style>
