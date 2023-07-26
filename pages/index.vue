<script setup lang="ts">
const { data } = useFetch('/api/mobiles/create')
</script>

<template>
  <div>{{ data }}</div>
</template>
