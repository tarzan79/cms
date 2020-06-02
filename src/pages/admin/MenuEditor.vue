<template>
  <q-page class="flex flex-center">
    <div class="scroll overflow-hidden" style="height: 100px">
       <q-btn dense round flat color="red" @click="test" icon="delete">test</q-btn>
    </div>
  </q-page>
</template>

<script>
const routes = [{
  path: '/',
  component: () => import('layouts/AdminLayout.vue'),
  meta: {
    permission: 'owner',
    requiresAuth: true
  },
  children: [{
    path: 'test',
    component: () => import('pages/Index.vue')
  }]
}]

export default {
  name: 'MenuEditor',
  methods: {
    test: function () {
      this.$router.addRoutes(routes)
      this.$router.push('/test')
    }
  }
}
</script>
