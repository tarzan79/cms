// import something here
import adminroutes from './router/admin'
import nodeStore from './store/'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ app, router, store, Vue }) => {
  router.addRoutes(adminroutes)
  store.registerModule('nodes', nodeStore)
}
