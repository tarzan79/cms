<template>
  <q-page class="flex flex-center">
    <Notif :errors="errors"></Notif>
    <form class="login" @submit.prevent="signup">
      <h2>{{ $t('signup') }}</h2>
      <q-input required filled v-model="user.username" type="text" :label="$t('username')" />
      <br />
      <q-input required filled v-model="user.email" type="mail" :label="$t('mail')" />
      <br />
      <q-input required filled v-model="user.password" type="password" :label="$t('password')" />
      <br />
      <q-input required filled v-model="user.confirmation" type="password" :label="$t('confirm')" />

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
  name: 'Subscribe',
  data () {
    return {
      errors: [],
      user: {
        username: '',
        email: '',
        password: '',
        confirmation: ''
      }
    }
  },
  methods: {
    signup: function () {
      console.log('signup 1')
      this.$store
        .dispatch('signup', this.user)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
