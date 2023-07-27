<script setup lang="ts">
const { $client } = useNuxtApp()

const mobiles = await $client.mobiles.getMobiles.query()

const CreateMobile = async () => {
  try {
    const mobile = await $client.mobiles.create.mutate(
      {
        name: 'created by trpc endpoint',
        title: 'somthing',
        slug: 'created-trpc',
        price: '32000'
      }
    )
    console.log(mobile)

    return mobile
  } catch (err) {
    console.log({ err })
  }
}

const UpdateMobile = async () => {
  const mobile = await $client.mobiles.update.mutate(
    {
      where: { id: 8 },
      data: {
        name: 'created using trpc',
        title: 'somthing else',
        // slug: 'created-trpc',
        price: 32000
      }
    }
  )
  console.log(mobile)

  return mobile
}

const DeleteMobile = async () => {
  const mobile = await $client.mobiles.delete.mutate(
    {
      where: { id: 8 }
    }
  )
  console.log(mobile)

  return mobile
}

</script>

<template>
  <div>
    <div v-for="mobile in mobiles" :key="mobile.id">
      <br>
      {{ mobile }}
    </div>
    <div>
      <button @click="CreateMobile">
        Create
      </button>
      <br>
      <button @click="UpdateMobile">
        Update
      </button>
      <br>
      <button @click="DeleteMobile">
        Delete
      </button>
    </div>
  </div>
</template>
