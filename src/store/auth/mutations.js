export function auth_request (state) {
  state.status = 'loading'
}

export function auth_success (state, data) {
  console.log('auth succes')
  console.log(data.user)
  state.status = 'success'
  state.token = data.token
  state.user = data.user
}

export function auth_error (state) {
  state.status = 'error'
}

export function logout (state) {
  state.status = ''
  state.token = ''
}
