
<template>
  <div class="q-pa-md">
    <h2>Nouveau noeud</h2>
    <span>Nom </span><br><hr>
    <q-input required filled v-model="node.name" type="text" label="titre" />
    <br>
    <q-input filled v-model="node.formatedName" hint="Nom formatté" :label="node.name.replace(new RegExp(/[.*+' \-?^${}()|[\]\\]/g), '_')" readonly />
    <br>
    <span>model </span>
    <hr>
    <Editor></Editor>
    <br>
    <q-btn label="Ajouter" @click="add"/>
  </div>
</template>

<script>
import Editor from './json-schema-editor/Editor'
import VueFormJsonSchema from 'vue-form-json-schema'
export default {
  /* eslint-disable vue/no-unused-components */
  name: 'CreateElement',
  components: {
    Editor
  },
  data () {
    return {
      node: {
        name: '',
        formatedName: '',
        desciption: '',
        model: ''
      }
    }
  },
  methods: {
    add: function () {
      console.log(this.author)
      this.$store.dispatch('insertOne', this.node)
      this.$router.push('/admin/nodes')
    },
    init: function () {
      this.$store.dispatch('getOneNode', this.$route.params.name).then((schema) => {
        console.log('schema node elements to create')
        console.log(schema)
        Object.keys(JSON.parse(schema.model)).forEach((key) => {
          this.columns.push({
            name: key,
            align: 'center',
            label: key,
            field: key,
            sortable: true
          })
        })
        this.columns.push({ name: 'actions', label: 'Actions', field: '', align: 'center' })
      })
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
