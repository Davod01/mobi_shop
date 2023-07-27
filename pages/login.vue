<script setup lang="ts">
const { data: event, error } = await useFetch('/api/examples')
console.log(event.value)
console.log('this is error')
console.log(error.value)

</script>

<template>
  <div>
    Prisma ORM Data from the database, received records:
  </div>
</template>
