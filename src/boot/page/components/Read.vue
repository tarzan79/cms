<template>
  <q-page class="q-pa-md row justify-center">
    <div class="col-12 col-md-6" v-html="page.content">

    </div>
  </q-page>
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
      this.$store
        .dispatch('getOnePage', this.$route.params.name)
        .then((page) => {
          this.page = page
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
<style></style>
