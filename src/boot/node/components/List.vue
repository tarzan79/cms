<template>
  <div class="q-pa-md">
    <h2>Liste des Nodes</h2>
    <q-btn to="/admin/pages/create" label="Créer"></q-btn>
    <q-btn @click="refresh" icon="refresh"></q-btn>
    <hr />
    <q-table title="Nodes" :data="nodes" :columns="columns" row-key="name">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="blue"
            type="a"
            :to="'/admin/nodes/' + props.row.formatedName"
            icon="edit"
          ></q-btn>
          <q-btn
            dense
            round
            flat
            color="green"
            type="a"
            :to="'/admin/nodes/' + props.row.formatedName + '/list'"
            icon="list"
          ></q-btn>
          <q-btn dense round flat color="red" @click="remove(props.row._id)" icon="delete"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'ListPages',
  data () {
    return {
      loading: false,
      to: '',
      nodes: [],
      columns: [
        {
          name: 'name',
          align: 'center',
          label: 'Name',
          field: 'name',
          sortable: true
        },
        {
          name: 'formatedName',
          align: 'center',
          label: 'Formated Name',
          field: 'formatedName',
          sortable: true
        },
        {
          name: 'description',
          align: 'center',
          label: 'Description',
          field: 'description',
          sortable: true
        },
        { name: 'actions', label: 'Actions', field: '', align: 'center' }
      ]
    }
  },
  //   created: function () {
  //     this.$emit('update:layout', Layout)
  //     this.showList()
  //   },
  mounted: function () {
    this.showList()
  },
  methods: {
    info: function (props) {
      console.log(props)
    },
    showList: function () {
      this.$axios({
        url: '/nodes',
        method: 'GET'
      })
        .then(resp => {
          // console.log(Object.values(resp.data))
          const array = Object.keys(resp.data).map(i => resp.data[i])
          console.log(array)
          this.nodes = array
          this.columns.data = array
        })
        .catch(err => {
          console.log(err)
        })
    },
    refresh: function () {
      this.showList()
    },
    edit: function (id) {
      this.$router.push('/admin/pages/modify/' + id)
    },
    remove: function (id) {
      this.$axios({
        url: '/pages/' + id,
        method: 'DELETE'
      })
        .then(resp => {
          console.log('page supprimer')
          this.showList()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(233, 232, 232);
  padding: 10px;
  margin: 10px 0px;
  h3 {
    margin: 10px 0px;
  }
}
</style>
