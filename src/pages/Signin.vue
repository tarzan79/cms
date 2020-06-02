<template>
  <q-page class="flex flex-center">
    <Notif :errors="errors"></Notif>
    <br />
    <form class="login" @submit.prevent="signin">
      <h2>{{ $t('signin') }}</h2>
      <q-input required filled v-model="email" type="text" :label="$t('username')" />
      <br />
      <q-input required filled v-model="password" type="password" :label="$t('password')" />
      <br />
      <q-btn to="/forgot" :label="$t('forgot')" />
      <hr />
      <q-btn @click="$router.go(-1)" :label="$t('back')" outline />

      <q-btn class="float-right" type="submit" :label="$t('signin')" />
    </form>
  </q-page>
</template>

<script>
import Notif from 'src/mixins/Notification'
export default {
  components: {
    Notif
  },
  name: 'Signin',
  data () {
    return {
      errors: [],
      email: '',
      password: ''
    }
  },
  methods: {
    signin: function () {
      const email = this.email
      const password = this.password
      this.$store
        .dispatch('signin', {
          email,
          password
        })
        .then(tt => {
          console.log('login ok')
          this.$router.push('/admin')
        })
        .catch(err => {
          console.log(err)
          console.log('login erreur')
          this.errors = err
        })
    }
  }
}
</script>
