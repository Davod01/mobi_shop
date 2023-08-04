<!-- eslint-disable camelcase -->
<script setup lang="ts">
const { signIn } = useAuth()
const snackbar = ref<boolean>(false)
const snackbarText = ref<string>('')

const login = async () => {
  await signIn('credentials', { email: 'crud@mail.com', password: 'Davod9569', callbackUrl: '/' })
}

const signUp = async () => {
  if (form.email.length < 10) {
    snackbarText.value = 'ایمیل کوتاه هست'
    snackbar.value = true
    form.password = ''
    form.password2 = ''
    return
  }
  if (form.password.length < 6 && form.password2.length < 6) {
    snackbarText.value = 'رمز حداقل باید شش کاراکتر باشد'
    snackbar.value = true
    form.password = ''
    form.password2 = ''
    return
  }
  if (form.password !== form.password2) {
    snackbarText.value = 'تکرار رمز یکسان نیست'
    snackbar.value = true
    form.password = ''
    form.password2 = ''
    return
  }
  const { data, error }: {data: Ref, error: Ref} = await useFetch('/api/v1/users/user', {
    method: 'POST',
    body: {
      email: form.email,
      password: form.password
    }
  })
  form.email = ''
  form.password = ''
  form.password2 = ''
  if (error.value) {
    throw createError(error.value)
  }
  if (data.value.message === 'created') {
    ItLogin_page.value = true
    snackbarText.value = 'با موفقیت اکانت شما ساخته شد'
    snackbar.value = true
  }
}

const ItLogin_page = ref<boolean>(true)
const PageState = computed(() => {
  return ItLogin_page.value ? 'عضو شوید' : 'وارد شوید'
})

const form = reactive<{
  email : string,
  password: string,
  password2: string
}>({
  email: '',
  password: '',
  password2: ''
})

</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-img
        src="/17580.jpg"
        height="200px"
        class="text-center myHeader"
        alt="title page background"
        cover
      >
        <h2 class="text-h2">
          {{ ItLogin_page ? 'ورود به حساب کاربری' : 'ساخت اکانت جدید' }}
        </h2>
      </v-img>
    </v-col>
    <v-col>
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbarText }}

        <template #actions>
          <v-btn
            color="pink"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>

    <v-col cols="12" md="10" class="mx-auto mb-4">
      <v-row>
        <v-col v-if="ItLogin_page" cols="5">
          <h3 class="text-h4">
            ورود
          </h3>

          <v-text-field
            v-model="form.email"
            color="primary"
            label="ایمیل"
            placeholder="johndoe"
            variant="underlined"
          />

          <v-text-field
            v-model="form.password"
            color="primary"
            label="رمز عبور"
            variant="underlined"
            type="password"
          />

          <v-btn color="primary" rounded="xl" class="mt-3" @click="login()">
            وارد شوید
          </v-btn>
        </v-col>

        <v-col v-else cols="5">
          <h3 class="text-h4">
            عضویت
          </h3>
          <v-text-field
            v-model="form.email"
            color="primary"
            label="ایمیل"
            placeholder="johndoe@mail.com"
            variant="underlined"
          />

          <v-text-field
            v-model="form.password"
            color="primary"
            label="رمز عبور"
            variant="underlined"
            type="password"
          />

          <v-text-field
            v-model="form.password2"
            color="primary"
            label="تکرار رمز عبور"
            variant="underlined"
            type="password"
          />

          <v-btn color="primary" rounded="xl" class="mt-3" @click="signUp">
            ثبت نام
          </v-btn>
        </v-col>

        <v-col cols="5" offset="2" class="text-center">
          <h3 class="text-h4">
            Login
          </h3>
          <p class="text-body-1 mt-2" style="line-height: 2rem;">
            ثبت نام در این سایت به شما امکان می دهد تا به وضعیت سفارش و تاریخ سفارش خود دسترسی پیدا کنید. فقط فیلدهای زیر را پر کنید ، و بدون هیچ وقت حساب جدیدی را برای شما ایجاد خواهیم کرد. ما فقط از شما اطلاعات لازم را می خواهیم تا سریع تر و آسان تر روند خرید را انجام دهید.
          </p>
          <v-btn rounded="xl" class="mt-3" @click="ItLogin_page = !ItLogin_page">
            {{ PageState }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
