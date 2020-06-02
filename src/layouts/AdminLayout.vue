<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <AdminBar/>
    </q-header>

    <q-drawer
        show-if-above
        :width="180"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
        v-model="left" side="left">
      <Navigation />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Navigation from 'src/components/AdminNavigation'
import AdminBar from 'src/components/AdminBar'
export default {
  components: {
    Navigation,
    AdminBar
  },
  data () {
    return {
      left: false
    }
  }
}
</script>
