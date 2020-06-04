export function getAllNodes ({
  commit, getters
}) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'GET',
      url: '/nodes'
    }).then(nodes => {
      commit('getAllNodes', nodes.data)
      resolve(nodes.data)
    }).catch(err => {
      console.log('erreurs de chargement des nodes')
      reject(err)
    })
  })
}

export function getOneNode ({
  commit, getters
}, formatedName) {
  const node = getters.getOneNode(formatedName)
  if (node === undefined) {
    return new Promise((resolve, reject) => {
      this.$axios({
        method: 'GET',
        url: '/nodes?formatedName=' + formatedName
      }).then(node => {
        const res = node.data[0]
        commit('getOneNode', res)
        resolve(res)
      }).catch(err => {
        console.log('erreurs de chargement des nodes')
        reject(err)
      })
    })
  } else {
    return node
  }
}

export function deleteOneNode ({ commit, state, dispatch }, id) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'DELETE',
      url: '/nodes/' + id
    }).then(node => {
      commit('deleteOneNode', id)
      resolve(true)
    }).catch(err => {
      console.log('node non trouvé, il a surement déjà été supprimé')
      reject(err)
    })
  })
}

export function updateOneNode ({ commit, state }, data) {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'PUT',
      url: '/nodes/' + data._id,
      data: data
    }).then(page => {
      commit('updateOneNode', data)
      resolve(true)
    }).catch(err => {
      console.log('node non trouvé, il a surement déjà été supprimé')
      reject(err)
    })
  })
}
