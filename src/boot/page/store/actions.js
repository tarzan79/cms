export function getAllPages ({
  commit, getters
}) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'GET',
      url: '/pages'
    }).then(pages => {
      commit('getAllPages', pages.data)
      resolve(pages.data)
    }).catch(err => {
      console.log('erreurs de chargement des pages')
      reject(err)
    })
  })
}

export function getOnePage ({
  commit, getters
}, formatedTitle) {
  const page = getters.getOnePage(formatedTitle)
  if (page === undefined) {
    return new Promise((resolve, reject) => {
      this.$axios({
        method: 'GET',
        url: '/pages?formatedTitle=' + formatedTitle
      }).then(page => {
        const res = page.data[0]
        commit('getOnePage', res)
        resolve(res)
      }).catch(err => {
        console.log('erreurs de chargement des pages')
        reject(err)
      })
    })
  } else {
    return page
  }
}

export function deleteOnePage ({ commit, state, dispatch }, id) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'DELETE',
      url: '/pages/' + id
    }).then(page => {
      commit('deleteOnePage', id)
      resolve(true)
    }).catch(err => {
      console.log('page non trouvé, elle a surement déjà été supprimé')
      reject(err)
    })
  })
}

export function updateOnePage ({ commit, state }, data) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'PUT',
      url: '/pages/' + data._id,
      data: data
    }).then(page => {
      commit('updateOnePage', data)
      resolve(true)
    }).catch(err => {
      console.log('page non trouvé, elle a surement déjà été supprimé')
      reject(err)
    })
  })
}

export function insertOnePage ({ commit }, data) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'POST',
      url: '/pages/',
      data: data
    }).then(page => {
      commit('insertOnePage', data)
      resolve(true)
    }).catch(err => {
      console.log('insertion non reussi')
      reject(err)
    })
  })
}
