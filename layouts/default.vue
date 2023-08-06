<!-- eslint-disable camelcase -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<script setup lang="ts">
import { useBasket } from '~/stores/basket'
import { digitSeperator } from '~/composeable/utils'
import logo from '~/assets/logo.png'
import telegramIcon from '~/assets/svg/telegram-app.svg'
const loading = ref<boolean>(true)

const { items, remove_item } = useBasket()
const { status, signOut } = useAuth()

const total_value = computed(() => items.reduce((acc, x) => acc + (x.price * x.quantity), 0))

const drawer = ref<boolean>(false)
const storeDrawer = ref<boolean>(false)

const showAlert = () => {
  alert('متاسفانه این وبسایت اینچنین قابلیتی را پشتیبانی نمی کند')
}
onNuxtReady(() => { loading.value = false })
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" disable-resize-watcher>
      <v-list class="" variant="plain" active-class="text-purple-darken-4">
        <v-list-item to="/" class="text-body-2 yekan-bold">
          صفحه نخست
        </v-list-item>
        <v-list-item to="/store" class="text-body-2 yekan-bold">
          فروشگاه
        </v-list-item>
        <v-list-item to="/about" class="text-body-2 yekan-bold">
          درباره ما
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="storeDrawer"
      disable-resize-watcher
      width="320"
      location="left"
    >
      <div
        class="d-flex ma-2 py-2 justify-space-between"
        style="border-bottom: 1px solid rgba(0, 0, 0,0.15);"
      >
        <h5 class="text-h5 text-grey-darken-3 font-weight-bold">
          سبد خرید
        </h5>
        <v-btn class="mx-2" icon="mdi-close" size="x-small" @click="storeDrawer = !storeDrawer" />
      </div>

      <v-list class="">
        <v-list-item v-for="(item, index) in items" :key="index" :prepend-avatar="item.image">
          <v-list-item-title class="grey-darken-2">
            {{ item.name.split(' ').splice(0,3).join(' ') }}
          </v-list-item-title>
          <v-list-item-subtitle>مبلغ: <span class="text-purple-darken-4">{{ digitSeperator(item.price.toString()) }}</span> * {{ item.quantity }}</v-list-item-subtitle>

          <template #prepend>
            <v-btn
              size="small"
              variant="text"
              icon="mdi-close"
              @click="remove_item(index)"
            />
          </template>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="pa-2 mb-4" style="border-top: 1px solid rgba(0, 0, 0,0.15);">
          <div class="pa-2 text-center">
            <p class="text-h6 text-grey-darken-4">
              جمع کل:
              <span class="text-purple-darken-4">
                {{ digitSeperator(total_value.toString()) }} تومان
              </span>
            </p>
          </div>
          <v-btn
            color="purple-darken-4"
            block
            @click="showAlert"
          >
            تسویه حساب
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="hide" class="flex flex-row justify-space-between">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

      <div style="width: 200px;">
        <v-img :src="logo" class="pa-1" alt="logo" />
      </div>

      <v-list class="d-none d-md-flex flex-row" variant="plain" active-class="text-purple-darken-4">
        <v-list-item to="/" class="text-body-2 yekan-bold">
          صفحه نخست
        </v-list-item>
        <v-list-item to="/store" class="text-body-2 yekan-bold">
          فروشگاه
        </v-list-item>
        <v-list-item to="/about" class="text-body-2 yekan-bold">
          درباره ما
        </v-list-item>
      </v-list>

      <div class="d-flex align-center">
        <div>
          <v-btn v-if="status === 'unauthenticated'" to="/auth/login">
            ورود
          </v-btn>
          <v-btn v-else @click="signOut">
            خروج
          </v-btn>
        </div>

        <v-btn icon="mdi-basket" @click="storeDrawer = !storeDrawer" />
      </div>
    </v-app-bar>

    <NuxtLoadingIndicator />

    <v-main>
      <LoadingComp v-if="loading" />
      <slot v-else />
    </v-main>

    <v-footer class="mt-4">
      <v-row class="footer-bg text-white">
        <v-col cols="10" sm="6">
          <v-img :src="logo" class="ma-2" max-width="320px" alt="logo" />
        </v-col>

        <v-col cols="12" sm="6" class="mt-sm-5">
          <div class="d-flex flex-column">
            <p class="mx-3">
              فروشگاه موبی استور - بهترین قالب فروشگاهی مناسب موبایل
            </p>
            <v-chip variant="text" prepend-icon="mdi-map-marker">
              زاهدان بلوار انقلاب جنب شهر نان
            </v-chip>
            <v-chip variant="text" prepend-icon="mdi-phone">
              09913501909
            </v-chip>
          </div>
        </v-col>

        <v-col cols="6">
          <v-list class="inherit-bg text-white" variant="plain">
            <v-list-subheader class="text-white">
              دسترسی سریع
            </v-list-subheader>
            <v-list-item to="/">
              صفخه نخست
            </v-list-item>
            <v-list-item to="/store">
              فروشگاه
            </v-list-item>
            <v-list-item to="/about">
              ارتباط با ما
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="6">
          <v-list class="inherit-bg text-white" variant="plain">
            <v-list-subheader class="text-white">
              دسته بندی محصولات
            </v-list-subheader>
            <v-list-item>گوشی موبایل</v-list-item>
            <v-list-item>ساعت هوشمند</v-list-item>
            <v-list-item>بلاگ</v-list-item>
            <v-list-item>ارتباط با ما</v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-chip variant="text" style="direction: ltr;" href="https://t.me/davoudNar">
            <v-img
              width="25"
              height="25"
              :src="telegramIcon"
              alt="telegram icon"
            />
            @DavoudNar
          </v-chip>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.v-toolbar__content {
  justify-content: inherit;
}

.footer-bg {
  background: rgb(75,7,147);
  background: linear-gradient(54deg, rgba(75,7,147,1) 0%, rgba(36,6,74,1) 100%);
}

.inherit-bg {
  background: inherit !important;
}

.rounded-2 {
  border-radius: 2rem;
}

.myHeader > .v-responsive__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
#inspire {
  overflow: hidden;
}
.no-drag {
  pointer-events: none;
}
</style>
