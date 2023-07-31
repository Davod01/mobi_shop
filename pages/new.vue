<script setup lang="ts">
import Typed from 'typed.js'
// useHead({
//   script: [
//     {
//       src: 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js',
//       // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
//       tagPosition: 'head'
//     }
//   ]
// })
const anim = () => {
  const typed = new Typed('#element',
    {
      strings: ['<i>First</i> sentence.', ' a second sentence.'],
      typeSpeed: 50
    })
}

</script>

<template>
  <div class="ma-4" @click="anim()" style="width: 400px;height: 400px;background-color: cornflowerblue;">
    <span id="element"></span>
  </div>
</template>
