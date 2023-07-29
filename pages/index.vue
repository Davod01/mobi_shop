<script setup lang="ts">
const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: mobiles } = useFetch('/api/v1/mobiles')
const { data, status } = useAuth()

const { data: session } = useFetch('/api/examples', { headers })
console.log(session.value)

console.log({ data: data.value })

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
    <div>
      data : {{ data }}
    </div>
    <div>
      status : {{ status }}
    </div>
  </div>
</template>
