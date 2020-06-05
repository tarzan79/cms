
<template>
  <div class="q-pa-md">
    <h2>Nouvelle page</h2>
    <span>Titre </span><br><hr>
    <q-input required filled v-model="title" type="text" label="titre" />
    <br>
    <q-input filled v-model="formatedTitle" hint="Nom formatté" :label="title.replace(new RegExp(/[.*+' \-?^${}()|[\]\\]/g), '_')" readonly />
    <br>
    <q-input readonly required filled v-model="author" type="text" />
    <span>schema </span>
    <hr>
    <Editor></Editor>
    <br>
    <q-btn label="Ajouter" @click="add"/>
  </div>
</template>

<script>
import Editor from './json-schema-editor/Editor'
export default {
  /* eslint-disable vue/no-unused-components */
  name: 'CreateNode',
  components: {
    Editor
  },
  data () {
    return {
      node: {
        title: '',
        formatedTitle: '',
        qeditor: ''
      }
    }
  },
  methods: {
    add: function () {
      console.log(this.author)
      this.$store.dispatch('insertOne', this.node)
      this.$router.push('/admin/pages')
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
