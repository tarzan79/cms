
<template>
  <div class="q-pa-md">
    <h2>Modifier page</h2>
    <span>Titre </span><br><hr>
    <q-input required filled v-model="page.title" type="text" label="titre" />
    <br>
    <q-input filled v-model="page.formatedTitle" label="formatté" readonly />
    <br>
    <q-input readonly required filled v-model="page.author" type="text" />
    <span>Contenu </span>
    <hr>
    <q-editor
      v-model="page.content"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
    <br>
    <q-btn label="Ajouter" @click="save"/>
  </div>
</template>

<script>

export default {
/* eslint-disable vue/no-unused-components */
  name: 'CreatePage',
  data () {
    return {
      page: {
        title: '',
        author: this.$store.state.auth.user.username,
        formatedTitle: '',
        content: ''
      },
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  mounted: function () {
    console.log(this.$route.params.title)
    this.init()
  },
  methods: {
    init: function () {
      this.$store
        .dispatch('getOnePage', this.$route.params.title)
        .then((resp) => {
          console.log('page recuperer')
          console.log(resp)
          this.page = resp
        })
        .catch(err => console.log(err))
    },
    save: function () {
      this.$store
        .dispatch('updateOnePage', this.page)
        .then((page) => {
          this.page = page
        })
        .catch(err => console.log(err))
      this.$router.push('/admin/pages')
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
