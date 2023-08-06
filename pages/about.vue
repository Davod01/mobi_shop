<script setup lang="ts">

useSeoMeta({
  title: 'درباره فروشگاه',
  ogTitle: 'درباره فروشگاه',
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

</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-img
        src="/17580.jpg"
        height="200px"
        class="text-center myHeader"
        alt="title page background"
        cover
      >
        <h2 class="text-h2">
          درباره ما
        </h2>
      </v-img>
    </v-col>
    <v-col cols="10" class="mx-auto">
      <h2 class="text-h2">
        درباره فروشگاه
      </h2>
      <p class="text-body-1 mt-2" style="line-height: 2rem;">
        در فضای امروز تجارت الکترونیک ایران، شاید دشوارترین کار برای یک سایت فروشگاهی تمرکز بر یک حوزه خاص و محروم شدن از مزیتهای رقابتی فروش کالاهای مختلف باشد؛ اما از سوی دیگر همین تخصص و تمرکزگرایی موجب بالا رفتن توان یک سایت در ارائه بهترین و دقیقترین مشاوره و در نهایت انتخاب و خرید بهتر برای کاربران خواهد شد و تجربه‌های متعدد داخلی و بین المللی موید این نکته است که اعتماد کاربران به فروشگاههای تخصصی روز به روز در حال افزایش است و فروشگاه موبایل مفتخر است که در طول بیش از یک دهه فعالیت مستمر با سخت کوشی این رویه را حفظ کرده است. فروشگاه موبایل بعنوان یک فروشگاه اینترنتی رعایت جانب انصاف و صداقت بعنوان اصلی ترین پایه این اعتماد را سرلوحه کار خود می داند و همواره سعی در گسترش خدمات خود خواهد داشت به نحوی که بزودی خدمات نوینی را در راستای ارائه خدمات هر چه بهتر به کاربران و خریداران رونمایی خواهد کرد.
      </p>
    </v-col>

    <v-col cols="12" class="mx-auto my-4 pt-0">
      <v-img
        class="ma-auto rounded-2"
        src="/about/about.jpg"
        max-height="350px"
        max-width="350px"
        alt="about"
      />
    </v-col>

    <v-row class="justify-center ma-2">
      <v-col cols="12" sm="6" md="3">
        <v-img
          class="pa-0"
          src="/about/b04.jpg"
          alt="about slide 1"
        />
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-img
          class="pa-0"
          src="/about/b004.jpg"
          alt="about slide 2"
        />
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-img
          class="pa-0"
          src="/about/b005.jpg"
          alt="about slide 3"
        />
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-img
          class="pa-0"
          src="/about/b006.jpg"
          alt="about slide 4"
        />
      </v-col>
    </v-row>
  </v-row>
</template>
