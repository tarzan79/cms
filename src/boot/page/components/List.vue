<template>
    <div class="q-pa-md">
        <h2>Liste des Pages</h2>
        <q-btn to="/admin/pages/create" label="Créer"></q-btn>
        <q-btn @click="refresh" icon="refresh"></q-btn>
        <hr>
        <q-table
          title="Article"
          :data="pages"
          :columns="columns"
          row-key="name"
        >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round flat color="grey" type="a" :to="'/admin/pages/' + props.row.formatedTitle" icon="edit"></q-btn>
            <q-btn dense round flat color="grey" @click="remove(props.row._id)" icon="delete"></q-btn>
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
      pages: [],
      columns: [
        { name: 'title', align: 'center', label: 'Titre', field: 'title', sortable: true },
        { name: 'formatedTitle', align: 'center', label: 'Formated Title', field: 'formatedTitle', sortable: true },
        { name: 'author', align: 'center', label: 'Autheur', field: 'author', sortable: true },
        { name: 'creationDate', label: 'Date', field: 'creationDate' },
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
      this.$store
        .dispatch('getAllPages')
        .then((pages) => {
          this.pages = pages
        })
        .catch(err => console.log(err))
    },
    refresh: function () {
      this.showList()
    },
    edit: function (id) {
      this.$router.push('/admin/pages/modify/' + id)
    },
    remove: function (id) {
      this.$store
        .dispatch('deleteOnePage', id)
        .then(() => {
          this.pages = this.$store.getters.getAllPages
        })
        .catch(err => console.log(err))
    }
  }
}

</script>

<style lang="scss" scoped>
  .card {
    background-color: rgb(233, 232, 232);
    padding: 10px;
    margin: 10px 0px;
    h3{
      margin: 10px 0px;
    }
  }

</style>
