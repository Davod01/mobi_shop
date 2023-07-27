<script setup lang="ts">
const { data: mobiles } = useFetch('/api/v1/mobiles')

async function fetchData () {
  const { data } = await useFetch('/api/mobiles/v1/delete', {
    method: 'DELETE',
    query: { id: 4 }
  })
  console.log(data.value)
}

</script>

<template>
  <div>
    <div v-for="mobile in mobiles" :key="mobile.id">
      <br>
      {{ mobile }}
    </div>
    <button @click="fetchData">
      click
    </button>
  </div>
</template>
