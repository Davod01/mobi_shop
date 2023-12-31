<!-- eslint-disable camelcase -->
<script setup lang="ts">
import { MobilePaginatedResponseSchema } from '~/types/types'
import { digitSeperator } from '~/composeable/utils'
import type { mobileFilterParamsSchema } from '~/types/types'

// const headers = useRequestHeaders(['cookie']) as HeadersInit
definePageMeta({
  keepalive: true
})
useSeoMeta({
  title: 'محصولات',
  ogTitle: 'محصولات',
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

const ordering = ref<string>('')
const page = ref<number>(1)
const displayMode = ref<number>(4)
const priceRange = ref<[number, number]>([0, 100000000])
const { y } = useWindowScroll()
const brands = ref<string | undefined>()

const { data: res, error } : { data: Ref<MobilePaginatedResponseSchema>, error: Ref } = await useFetch('/api/v1/mobiles')
if (error.value) {
  throw createError(error.value)
}

const mobiles = res.value?.mobiles

const filtersBar = ref<boolean>(false)

const wrapperElement = ref(null)
const { height } = useElementSize(wrapperElement)
const stickyPosition = computed(() => (((y.value) / height.value) * 100) + '%')
const thereIsMobiles = computed(() => {
  return mobiles.length > 0
})

const pagination_len = ref<number>(res.value?.paginate_size)

async function page_update () {
  const query: mobileFilterParamsSchema = {}
  if (page.value > 1) { query.page = page.value }
  if (ordering.value === 'asc' || ordering.value === 'desc') { query.priceSortBy = ordering.value }
  if (priceRange.value[0] > 1000000 || priceRange.value[1] < 100000000) {
    query.minPrice = priceRange.value[0]
    query.maxPrice = priceRange.value[1]
  }
  if (brands.value) {
    query.contains = brands.value as any
  }
  const { data, error } : { data: Ref<MobilePaginatedResponseSchema>, error: Ref } = await useFetch('/api/v1/mobiles', {
    query
  })
  if (error.value) {
    throw createError(error.value)
  }

  mobiles.splice(0, mobiles.length)
  pagination_len.value = data.value?.paginate_size

  for (const mobile of data.value?.mobiles) {
    mobiles.push(mobile)
  }
}

const set_ordering = (by: string) => {
  ordering.value = by
  page.value = 1
  page_update()
}

const set_price_range = (min: number, max: number) => {
  priceRange.value[0] = min
  priceRange.value[1] = max
  page.value = 1
  page_update()
}

const remove_price_range = () => {
  priceRange.value[0] = 0
  priceRange.value[1] = 100000000
  page.value = 1
  page_update()
}

const breadcrumb_items = [
  {
    title: 'صفحه نخست',
    to: '/'
  },
  {
    title: 'فروشگاه',
    to: '/store'
  }
]
watchThrottled(brands, () => {
  page_update()
},
{ throttle: 500 }
)
</script>

<template>
  <v-row align="center">
    <v-col cols="12">
      <v-img
        src="/17580.jpg"
        height="200px"
        class="text-center myHeader"
        alt="title page background"
        cover
      >
        <h2 class="text-h2">
          فروشگاه
        </h2>
      </v-img>
    </v-col>
    <v-col ref="wrapperElement" cols="12">
      <v-row class="mx-4">
        <v-col cols="3" class="d-none d-md-block">
          <div style="position: sticky; width: 280px" :style="{top: stickyPosition}">
            <h6 class="text-h6">
              دسته بندی محصولات
            </h6>
            <v-chip-group
              v-model="brands"
              class="flex-column"
              selected-class="text-deep-purple-accent-4"
              style="width: 140px"
              filter
              column
            >
              <v-chip value="iPhone">
                ایفون
              </v-chip>

              <v-chip value="Samsung">
                سامسونگ
              </v-chip>

              <v-chip value="Xiaomi">
                شیائومی
              </v-chip>
            </v-chip-group>

            <v-divider class="my-3" />

            <div>
              <h6 class="text-subtitle-1 font-weight-bold">
                جستجو بر اساس قیمت
              </h6>
              <v-range-slider
                v-model="priceRange"
                color="#831aaf"
                step="5000000"
                min="0"
                max="100000000"
              />

              <div class="text-body-1">
                <span class="font-weight-light text-medium-emphasis">قیمت: </span>
                <span>{{ digitSeperator( priceRange[0].toString() ) }} </span>
                تا
                <span>{{ digitSeperator( priceRange[1].toString() ) }}</span>
              </div>

              <v-btn
                density="compact"
                rounded="xl"
                class="my-2 mx-3"
                @click="remove_price_range"
              >
                ریست
              </v-btn>
              <v-btn
                density="compact"
                rounded="xl"
                class="my-2 mx-3"
                @click="set_price_range(priceRange[0], priceRange[1])"
              >
                فیلتر
              </v-btn>
            </div>

            <v-divider class="my-3" />
          </div>
        </v-col>

        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12" class="d-flex justify-space-between align-center">
              <v-breadcrumbs
                :items="breadcrumb_items"
              />
              <v-btn prepend-icon="mdi-filter" variant="text" class="mx-2" @click="filtersBar = !filtersBar">
                فیلتر
              </v-btn>
            </v-col>

            <v-col cols="12">
              <v-expand-transition>
                <StoreFiltersComp
                  v-if="filtersBar"
                  @set_ordering="set_ordering"
                  @all_price_range="remove_price_range"
                  @set_price_range="set_price_range"
                />
              </v-expand-transition>
            </v-col>

            <v-col>
              <v-row
                v-if="thereIsMobiles"
                class="mb-4"
              >
                <v-col
                  v-for="mobile in mobiles"
                  :key="mobile.id"
                  cols="6"
                  :sm="displayMode"
                >
                  <Transition name="slide-in-right" appear>
                    <LazyStoreListItems :mobile="mobile" />
                  </Transition>
                </v-col>
              </v-row>
              <div v-else class="text-center">
                <h4 class="text-h4 text-info">
                  متاسفانه هیچ داده ای موجود نمی باشد :)
                </h4>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <ClientOnly>
            <v-pagination
              v-model="page"
              class="mx-2 mx-sm-0"
              :length="pagination_len"
              @update:model-value="page_update"
            />
          </ClientOnly>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.sticy-sidebar{
  position: fixed;
  top: 70px;
  width: 280px;
}
</style>
