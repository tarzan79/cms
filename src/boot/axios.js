import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://0.0.0.0:7000/api/v1/'
})
export default ({
  Vue, store
}) => {
  Vue.prototype.$axios = axios
  store.$axios = axios
}
export {
  axios
}
