<!-- eslint-disable vue/prop-name-casing -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<script setup lang="ts">
import type { Mobile } from '@prisma/client'
import { digitSeperator } from '~/composeable/utils'

defineProps<{
  mobile: Mobile
}>()

</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        :to="`/store/${mobile.slug}`"
        class="mx-auto text-center transformable pointer"
        :elevation="isHovering ? 12 : 0"
        :class="{ 'scale-1-1': isHovering }"
        v-bind="props"
      >
        <v-img
          :src="mobile.image ?? '/mobiles/samsung-galexy-j.jpg'"
          aspect-ratio="1"
        />
        <v-card-title>
          {{ mobile.title }}
        </v-card-title>
        <v-card-subtitle class="font-weight-bold text-purple-darken-4" style="opacity: 100;">
          {{ digitSeperator(mobile.price.toString()) }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </div>
</template>

<style lang="scss">
.transformable{
  transition: transform 250ms;
}
.scale-1-1{
  transform: scale(1.1);
}
.pointer {
  cursor: pointer;
}
</style>
