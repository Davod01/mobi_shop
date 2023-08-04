<!-- eslint-disable camelcase -->
<script setup lang="ts">
import type { Mobile } from '@prisma/client'
import { digitSeperator } from '~/composeable/utils'
import { useBasket } from '~/stores/basket'

const { push_item } = useBasket()
const quantity = ref<number>(1)
const { params } = useRoute()

const { data: mobile, error }: {data: Ref<Mobile>, error: Ref} = await useFetch(`/api/v1/mobiles/${params.slug}`, {
  headers: {
    content: 'text/html; charset=utf-8'
  }
})
if (error.value) {
  throw createError(error.value)
}

// console.log(mobile.value)
// useSeoMeta({
//   title: mobile.value.name.split(' ').splice(0, 6).join(' '),
//   ogTitle: mobile.value.name.split(' ').splice(0, 6).join(' '),
//   description: mobile.value.title,
//   ogDescription: mobile.value.title,
//   ogLocale: 'fa_IR'
// })

const incrementQuantity = () => {
  quantity.value < 10 ? quantity.value++ : quantity.value
}

const decrementQuantity = () => {
  quantity.value > 1 ? quantity.value-- : quantity.value
}

const breadcrumb_items = [
  {
    title: 'صفحه نخست',
    to: '/'
  },

  {
    title: 'فروشگاه',
    to: '/store'
  },

  {
    title: mobile.value.name.split(' ').splice(0, 3).join(' '),
    to: `/store/${mobile.value.slug}`
  }
]
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-row class="mx-4 my-4">
        <v-col cols="12" md="5" class="mt-6">
          <v-img
            max-height="600"
            :src="mobile.image ?? '/mobiles/samsung-galexy-j.jpg'"
            aspect-ratio="1"
          >
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                />
              </div>
            </template>
          </v-img>
        </v-col>

        <v-col cols="12" md="5">
          <div class="d-flex justify-space-between">
            <v-breadcrumbs
              :items="breadcrumb_items"
            />
          </div>
          <div>
            <h3 class="text-h4 py-2 yekan-bold">
              {{ mobile.name }}
            </h3>
            <p class="text-purple-darken-4 text-h6 py-2 yekan-bold ">
              {{ digitSeperator(mobile.price.toString()) }} تومان
            </p>
            <pre
              class="py-2 text-grey yekan-light"
              style="font-size: 1.1rem;white-space: pre-line"
            >{{ mobile.introduction }}</pre>
          </div>
          <div class="d-flex mt-2">
            <!-- <store-quantity
              :quantityVal="quantity"
              @increment="incrementQuantity"
              @decrement="decrementQuantity"
            /> -->
            <v-btn
              rounded="xl"
              color="purple-darken-4"
              class="font-weight-medium btn-fw-600 mx-2"
              text="افزودن به سبد خرید"
              @click="push_item({name: mobile.name, slug: mobile.slug, price: mobile.price, image: mobile.image ?? '',quantity: quantity })"
            />
          </div>
        </v-col>

        <v-col cols="2" class="d-none d-md-block">
          <div class="d-flex flex-column mt-16 h-100 px-2" style="border-right: 1px solid rgba(0,0,0,0.105);gap: 2rem;">
            <div class="d-flex flex-column align-center mt-2">
              <v-img
                width="70"
                height="70"
                src="/_nuxt/assets/svg/box.svg"
              />
              <h6 class="text-subtitle-1 yekan-extra-bold">
                تحویل اکسپرس
              </h6>
            </div>

            <div class="d-flex flex-column align-center ">
              <v-img
                width="70"
                height="70"
                src="/_nuxt/assets/svg/support-24.svg"
              />
              <h6 class="text-subtitle-1 yekan-extra-bold">
                ضمانت 24 ساعته
              </h6>
            </div>

            <div class="d-flex flex-column align-center ">
              <v-img
                width="70"
                height="70"
                src="/_nuxt/assets/svg/guarantee.svg"
              />
              <h6 class="text-subtitle-1 yekan-extra-bold">
                پرداخت امن
              </h6>
            </div>

            <div class="d-flex flex-column align-center ">
              <v-img
                width="70"
                height="70"
                src="/_nuxt/assets/svg/7-guarantee.svg"
              />
              <h6 class="text-subtitle-1 yekan-extra-bold">
                7 روز ضمانت
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <v-divider class="mt-16" />
    <v-col cols="12">
      <store-tabs :text="mobile.introduction ?? ''" />
    </v-col>
    <v-divider class="mt-16" />

    <v-col cols="12" class="my-4">
      <landing-page-mobile-slaider-comp />
    </v-col>
  </v-row>
</template>

<style lang="scss">
.iransans {
  font-family: "Yekan";
}
</style>
