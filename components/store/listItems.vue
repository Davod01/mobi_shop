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
          transition="slide-in-right"
          :alt="`image of ${mobile.name}`"
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
