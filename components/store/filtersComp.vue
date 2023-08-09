<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<script setup lang="ts">

</script>

<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-list class="inherit-bg text-grey-darken-1" variant="plain">
        <v-list-subheader color="black" class="font-weight-bold">
          مرتب سازی بر اساس
        </v-list-subheader>
        <v-list-item @click="$emit('set_ordering', '')">
          حذف مرتب سازی
        </v-list-item>
        <v-list-item @click="$emit('set_ordering', 'asc')">
          قیمت: از کم به زیاد
        </v-list-item>
        <v-list-item @click="$emit('set_ordering', 'desc')">
          قیمت: از زیاد به کم
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="12" sm="6">
      <v-list class="inherit-bg text-grey-darken-1" variant="plain">
        <v-list-subheader color="black" class="font-weight-bold">
          فیلتر قیمت
        </v-list-subheader>
        <v-list-item @click="$emit('all_price_range')">
          همه
        </v-list-item>
        <v-list-item @click="$emit('set_price_range',2000000, 9999999)">
          2,000,000 تومان - 9,999,999 تومان
        </v-list-item>
        <v-list-item @click="$emit('set_price_range',10000000,30000000)">
          10,000,000 تومان - 30,000,000 تومان
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
