<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <v-carousel
      hide-delimiters
      show-arrows="hover"
      reverse
      class="d-none d-sm-block"
    >
      <v-carousel-item
        src="/slider/slider01.jpg"
        cover
      >
        <div class="w-100 h-100 d-flex">
          <div class="w-50 h-100 ">
            <div class="d-flex flex-column h-100 justify-center align-center">
              <transition name="tracking-in-expand-fwd-bottom" appear>
                <h2 class="text-h2 font-weight-bold pb-1 pt-4">فروشگاه موبایل</h2>
              </transition>
              <transition name="tracking-in-expand-fwd-top" appear>
                <p class="text-h4 font-weight-medium py-2">فروش تخصصی انواع موبایل و تبلت</p>
              </transition>
              <transition name="scale-in-hor-center" appear>
                <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600" text="مشاهده محصولات">
                </v-btn>
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
                <h2 class="text-h2 font-weight-bold pb-1 pt-4">فروشگاه موبایل</h2>
              </transition>
              <transition name="tracking-in-expand-fwd-top" appear>
                <p class="text-h4 font-weight-medium py-2">فروش تخصصی انواع موبایل و تبلت</p>
              </transition>
              <transition name="scale-in-hor-center" appear >
                <v-btn rounded="xl" class=" mt-3 font-weight-medium btn-fw-600">مشاهده محصولات</v-btn>
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
          <h2 class="text-h2 font-weight-bold pb-1 pt-4 mt-4">فروشگاه موبایل</h2>
          <p class="text-h5 font-weight-medium py-2">فروش تخصصی انواع موبایل و تبلت</p>
          <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600">مشاهده محصولات</v-btn>
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="/slider/slidmob2.jpg"
        cover
      >
        <div class="d-flex flex-column align-center justify-start text-white">
          <transition></transition>
          <h2 class="text-h2 font-weight-bold pb-1 pt-4 mt-4">فروشگاه موبایل</h2>
          <p class="text-h5 font-weight-medium py-2">فروش تخصصی انواع موبایل و تبلت</p>
          <v-btn rounded="xl" class="mt-3 font-weight-medium btn-fw-600">مشاهده محصولات</v-btn>
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
