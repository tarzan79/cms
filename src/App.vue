<template>
  <div id="q-app">
    <router-view :key="$route.path"/>
  </div>
</template>

<script >
export default {
  name: 'App'
}
</script>
