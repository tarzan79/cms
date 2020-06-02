<template>
  <q-page class="q-pa-md">
    <Notif :errors="errors"></Notif>
    <form class="login" @submit.prevent="save">
      <h2>{{ $t('profile') }}</h2>
      <q-input required filled v-model="user.username" type="text" :label="$t('username')" />
      <br />
      <q-input required filled v-model="user.email" type="mail" :label="$t('mail')" />
      <br />
      <hr />
      <q-btn type="submit" :label="$t('validate')" />
    </form>
  </q-page>
</template>

<script>
import Notif from 'src/mixins/Notification'
export default {
  components: {
    Notif
  },
  name: 'Profile',
  data () {
    return {
      errors: [],
      user: {
        username: '',
        email: ''
      }
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log(this.$route.params.title)
      console.log(this.author)
      this.$axios({
        url: '/users?username=' + this.$store.getters.user.username,
        method: 'get'
      })
        .then(resp => {
          console.log('user recuperer')
          console.log(resp.data[0])
          this.user = resp.data[0]
        })
        .catch(err => {
          console.log('erreur : ')
          console.log(err.response.data.errors)
        })
    },
    save: function () {
      console.log(this.user.username)
      this.$axios({
        url: '/pages/' + this.user._id,
        method: 'put',
        data: this.user
      })
        .then(resp => {
          console.log('user modifier')
          console.log(resp.data)
        })
        .catch(err => {
          console.log('erreur : ')
          console.log(err.response.data.errors)
        })
      // this.$router.push('/admin')
    }
  }
}
</script>
