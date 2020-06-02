
<template>
  <sidebar-menu :menu="menu" :width="width" :collapsed="collapsed" :show-one-child="true" />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .v-sidebar-menu {
    position: relative;
    height: 100%;
  }

</style>

<script>
/* eslint-disable vue/no-unused-components */
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  name: 'AdminNavigation',
  components: {
    SidebarMenu
  },
  data () {
    return {
      menu: [{
        // component: componentName
        // visibleOnCollapse: true
      },
      {
        href: '/admin',
        title: 'Acceuil',
        icon: 'fa fa-user'
      },
      {
        // href: '/admin/pages',
        title: 'Pages',
        icon: 'fa fa-file',
        child: [{
          href: '/admin/pages',
          title: 'Liste des pages',
          icon: 'fa fa-th-list'
        }, {
          href: '/admin/pages/create',
          title: 'Nouvelle Page',
          icon: 'fa fa-plus-circle'
        }, {
          href: '/admin/pages/config',
          title: 'Configurer',
          icon: 'fa fa-plus-circle'
        }]
      },
      {
        title: 'Noeuds',
        icon: 'fa fa-cog',
        child: [{
          href: '/admin/nodes',
          title: 'Liste des Noeuds',
          icon: 'fa fa-th-list'
        }, {
          href: '/admin/nodes/create',
          title: 'Nouveaux Noeud',
          icon: 'fa fa-plus-circle'
        }, {
          href: '/admin/nodes/config',
          title: 'Configurer',
          icon: 'fa fa-plus-circle'
        }]
      },
      {
        // href: '/admin/pages',
        title: 'Apparence',
        icon: 'fa fa-file',
        child: [{
          href: '/admin/design/theme',
          title: 'Themes',
          icon: 'fa fa-th-list'
        },
        {
          href: '/admin/design/menu',
          title: 'Menu',
          icon: 'fa fa-plus-circle'
        }]
      },
      {
        // href: '/admin/pages',
        title: 'plugins',
        icon: 'fa fa-file',
        child: [{
          href: '/admin/pages',
          title: 'Liste',
          icon: 'fa fa-th-list'
        },
        {
          href: '/admin/pages/create',
          title: 'Configurer',
          icon: 'fa fa-plus-circle'
        }]
      },
      {
        // href: '/admin/pages',
        title: 'Profile',
        icon: 'fa fa-file',
        href: '/admin/profile'
      },
      {
        // href: '/admin/pages',
        title: 'Réglages',
        icon: 'fa fa-file',
        child: [{
          href: '/admin/pages',
          title: 'Général',
          icon: 'fa fa-th-list'
        },
        {
          href: '/admin/pages/create',
          title: 'Base de donnée',
          icon: 'fa fa-plus-circle'
        }]
      }
      ],
      width: '180px',
      collapsed: false,
      themes: ['', 'white-theme'],
      selectedTheme: 'white-theme'
    }
  }
}

</script>
