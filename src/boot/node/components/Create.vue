
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
    <q-input required filled v-model="node.model" type="text" label="model" ></q-input>
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
        name: '',
        formatedName: '',
        desciption: '',
        model: ''
      }
    }
  },
  methods: {
    add: function () {
      console.log('this.node')
      console.log(this.node)
      this.node.formatedName = this.node.name.replace(new RegExp(/[.*+' \-?^${}()|[\]\\]/g), '_')
      this.$store.dispatch('insertOneNode', this.node)
      this.$router.push('/admin/nodes')
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
