<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { gsap } from 'gsap'

onNuxtReady(() => {
  const scaleIn = document.querySelectorAll('.blogPost-scale-in')
  scaleIn.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'bottom 20%'
        // scrub: true
      },
      scale: 0.1,
      opacity: 0
    })
  })
})
</script>

<template>
  <v-row class="justify-center align-center">
    <v-col class="blogPost-scale-in" cols="12" md="6" lg="4">
      <v-card width="400" class="mx-auto text-center">
        <v-img
          src="/landing-page/1573412291_143_بررسی-شیائومی-ردمی-نوت-8-و-ردمی-نوت-8-پرو-408x272x23x0x362x272x1580364309.jpg"
          alt="mobile image"
          cover
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
        <v-card-item>
          <v-card-title class="font-weight-bold">
            مشخصات اصلی سامسونگ
          </v-card-title>
        </v-card-item>

        <v-card-text>
          به‌تازگی برخی مشخصات گلکسی M21 در بنچمارک گیک‌بنچ فهرست شده است و استفاده از تراشه‌ی اگزینوس ٩۶١١ و حافظه‌ی رم
        </v-card-text>
      </v-card>
    </v-col>

    <v-col class="blogPost-scale-in" cols="12" md="6" lg="4">
      <v-card width="400" class="mx-auto text-center">
        <v-img
          src="/landing-page/unnamed-310x207x16x0x277x207x1583923156.jpg"
          cover
          alt="mobile image"
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
        <v-card-item>
          <v-card-title class="font-weight-bold">
            سونی با وجود تولید گوشی‌های
          </v-card-title>
        </v-card-item>

        <v-card-text>
          سونی با وجود کاهش تولیدات سالانه خود اما هنوز هم محصولات قدرتمندی را به بازار عرضه می‌کند که سعی شده که ...
        </v-card-text>
      </v-card>
    </v-col>

    <v-col class="blogPost-scale-in" cols="12" md="6" lg="4">
      <v-card width="400" class="mx-auto text-center">
        <v-img
          src="/landing-page/unnamed1-310x207x16x0x277x207x1583919490.jpg"
          cover
          alt="mobile image"
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
        <v-card-item>
          <v-card-title class="font-weight-bold">
            شکایت شرکت فناوری پزشکی
          </v-card-title>
        </v-card-item>

        <v-card-text>
          شرکت فناوری پزشکی ماسیمو (Masimo) از اپل به‌دلیل سرقت اطلاعات محرمانه ازطریق کارکنان اصلی و نقض حق ثبت ۱۰ پتنت شکایت کرد.
        </v-card-text>
      </v-card>
    </v-col>

    <v-col class="blogPost-scale-in" cols="12" md="6" lg="4">
      <v-card width="400" class="mx-auto text-center">
        <v-img
          src="/landing-page/اپل-واچ-2-408x272x23x0x362x272x1580363676.jpg"
          cover
          alt="mobile image"
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
        <v-card-item>
          <v-card-title class="font-weight-bold">
            Xiaomi Redmi Note ردمی نوت
          </v-card-title>
        </v-card-item>

        <v-card-text>
          اپل در رویداد بعدی توسعه‌دهندگان خود، موسوم به WWDC که در ژوئن برگزار می‌شود، نسخه‌ی بعدی iOS و iPadOS را رونمایی خواهد کرد. کاربران و
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
