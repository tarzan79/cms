<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <AdminBar/>
      <q-tabs align="right">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>CMS with quasar
          </q-toolbar-title>
        </q-toolbar>
        <q-space />
        <q-route-tab to="/page/Accueil" :label="$t('home')" />
        <q-route-tab to="/page/page_de_test" label="truc" />
        <q-route-tab to="/signin" :label="$t('signin')" />
        <q-route-tab to="/signup" :label="$t('signup')" />
        <q-route-tab to="/about" :label="$t('about')" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>Title</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import AdminBar from 'src/components/AdminBar'
export default {
  name: 'MainLayout',
  components: {
    AdminBar
  },
  data () {
    return {}
  }
}
</script>
