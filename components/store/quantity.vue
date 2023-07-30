<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">

defineProps<{
  quantityVal: number
}>()

defineEmits<{
  (e: 'increment'): void
  (e: 'decrement'): void
}> ()

</script>

<template>
  <div class="d-flex align-center">
    <div class="input-control input-control-minus" @click="$emit('decrement')">
      -
    </div>
    <input
      class="quanity"
      type="number"
      :value="quantityVal"
    >
    <div class="input-control input-control-plus" @click="$emit('increment')">
      +
    </div>
  </div>
</template>

<style lang="scss">
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.quanity {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0,0,0,0.1);
  text-align: center;
  margin: 0 -2px;
  border-right: none;
  border-left: none;

}
.quanity:focus {
  outline-width: 0;
}

.input-control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0,0,0,0.1);
}
.input-control:hover{
  background-color: #9C27B0;
  color: white;
}

.input-control-minus{
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
}

.input-control-plus {
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
}
</style>
