<template>
  <div class="q-ma-md" v-html="page.content">
  </div>
</template>

<script>
export default {
  name: 'readPage',
  props: {
    name: {
      type: String
    }
  },
  data: function () {
    return {
      // name: "",
      page: {}
    }
  },
  mounted: function () {
    this.request()
  },
  methods: {
    request: function () {
      this.$axios({
        url: '/pages/?formatedTitle=' + this.$route.params.name,
        method: 'get'
      }).then(resp => {
        console.log('=========')
        console.log(resp.data[0])
        this.page = resp.data[0]
      }).catch(err => {
        console.log('-- ' + err)
      })
    }
  }
}
</script>
<style></style>
