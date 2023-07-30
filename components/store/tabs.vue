<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable camelcase -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<script setup lang="ts">
const v_tab = ref(null)

const items: string[] = [
  'توضیحات',
  'توضیحات تکمیلی'
]
defineProps<{
  text: string
}>()

</script>

<template>
  <v-tabs
    v-model="v_tab"
    bg-color="transparent"
    color="purple-darken-4"
    align-tabs="center"
    class="yekan-bold"
  >
    <v-tab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </v-tab>
  </v-tabs>

  <v-window v-model="v_tab">
    <v-window-item
      v-for="item in items"
      :key="item"
      :value="item"
    >
      <v-card flat>
        <v-card-text
          class="text-subtitle-1 yekan-light"
          v-text="text"
        />
      </v-card>
    </v-window-item>
  </v-window>
</template>
