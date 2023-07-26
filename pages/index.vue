<script setup lang="ts">

async function fetchData () {
  const { data } = await useFetch('/api/mobiles/create', {
    method: 'POST',
    body: {
      name: 'phone name 4',
      title: 'phone title',
      slug: 'phone slug 4',
      price: 5000,
      display: 'hex',
      display_size: 'hex',
      resolution: 'hex',
      os: 'hex',
      batery: 'hex',
      weight: 'hex',
      introduction: 'hex',
      expert_checks: 'hex',
      image: 'hex',
      rating: 'hex'
    }
  })
  console.log(data.value)
}

</script>

<template>
  <div>
    <button @click="fetchData">
      click
    </button>
  </div>
</template>
