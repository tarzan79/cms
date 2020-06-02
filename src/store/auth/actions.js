// axios.defaults.baseURL = 'http://0.0.0.0:3000/api/v1/';

export function signin ({
  commit
}, user) {
  return new Promise((resolve, reject) => {
    commit('auth_request')
    this.$axios({
      url: '/auth',
      data: user,
      method: 'POST'
    })
      .then(resp => {
        if (resp.data.success) {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          // Add the following line:
          this.$axios.defaults.headers.common.Authorization = token
          commit('auth_success', {
            token,
            user
          })
          console.log('token : ' + token)
          resolve(resp)
        } else if (resp.data.errors) {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(resp.data.errors)
        }
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
  })
}

export function signup ({
  commit
}, user) {
  return new Promise((resolve, reject) => {
    commit('auth_request')
    this.$axios({
      url: '/users',
      data: user,
      method: 'POST'
    })
      .then(resp => {
        if (resp.data.success) {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', user.token)
          this.$axios.defaults.headers.common.Authorization = user.token
          commit('auth_success', {
            token,
            user
          })
          console.log('token : ' + user.token)
          resolve(resp)
        } else {
          reject(resp.data.errors)
        }
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
  })
}

export function signout ({
  commit
}) {
  return new Promise((resolve, reject) => {
    commit('logout')
    localStorage.removeItem('token')
    delete this.$axios.defaults.headers.common.Authorization
    resolve()
  })
}
