<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">

</script>

<template>
  <v-row>
    <v-col class="d-flex align-center">
      <v-icon icon="mdi-cellphone" />
      <h4 class="text-h4">
        گوشی های هوشمند
      </h4>
    </v-col>

    <v-col cols="12">
      <v-slide-group
        class="pa-4 gap-10"
        center-active
        show-arrows
      >
        <v-slide-group-item
          v-slot="{ isSelected, toggle }"
        >
          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/Untitled-1-1-1-300x300.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              گوشی ایفون pro x
            </v-card-title>
            <v-card-subtitle>
              30,500,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              گوشی سامسونگ مدل گلکسی
            </v-card-title>
            <v-card-subtitle>
              20,000,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              samsung galexy s
            </v-card-title>
            <v-card-subtitle>
              4,500,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy-note.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              samsung galexy note
            </v-card-title>
            <v-card-subtitle>
              24,000,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy-note-plus.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              samsung galexy note+
            </v-card-title>
            <v-card-subtitle>
              30,500,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy-mgb.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              samsung galexy mgb
            </v-card-title>
            <v-card-subtitle>
              10,500,000
            </v-card-subtitle>
          </v-card>

          <v-card
            class="mx-auto text-center"
            max-width="344"
          >
            <v-img
              src="/mobiles/samsung-galexy-j.jpg"
              height="200px"
              cover
            />
            <v-card-title>
              samsung galexy j
            </v-card-title>
            <v-card-subtitle>
              12,500,000
            </v-card-subtitle>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.gap-10 > div > div{
  gap: 10px;
}
</style>
