import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/'
})
export default ({
  Vue,
}) => {
  Vue.prototype.$axios = axios
}
export {
  axios
}
