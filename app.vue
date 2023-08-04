<script setup lang="ts">
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useFnOnce from '~/composeable/useFnOnce'

const registerScrollTrigger = useFnOnce(() => {
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

if (process.client) {
  registerScrollTrigger()
}

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
