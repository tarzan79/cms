
<template>
    <q-toolbar v-if="isLoggedIn" class="bg-purple">
        <q-toolbar-title align="left">
            <q-btn to="/start/pick-quasar-flavour" color="orange" round icon="cloud_circle">
                <q-tooltip content-class="bg-red">Visiter le site officiel</q-tooltip>
            </q-btn>
            <q-btn to="/" color="red" icon="home" class="q-ma-sm" label="Nom du site"/>

            <q-btn class="float-right q-ma-sm" to="/admin" color="red" icon="home" label="Admin"/>
            <q-btn class="float-right q-ma-sm" @click="signout" color="red" icon="home" label="Se Deconnecter"/>
        </q-toolbar-title>
    </q-toolbar>
</template>

<script>
export default {
  name: 'AdminBar',
  data () {
    return {}
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    signout: function () {
      this.$store.dispatch('signout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
