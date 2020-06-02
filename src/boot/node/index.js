// import something here

import publicRoutes from './router/public'
import adminroutes from './router/admin'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ app, router, store, Vue }) => {
  router.addRoutes(publicRoutes)
  router.addRoutes(adminroutes)
}
