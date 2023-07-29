<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})
const { signIn } = useAuth()
const login = async () => {
  const data = await signIn('credentials', { email: 'crud@mail.com', password: 'Davod9569', callbackUrl: '/' })
  console.log(data)
}

</script>

<template>
  <div>
    click to login <button @click="login">login</button>
  </div>
</template>
