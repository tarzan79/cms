export function getAllPages (state, allPages) {
  state.pages = allPages
}

export function getOnePage (state, onePage) {
  state.pages.push(onePage)
}

export function deleteOnePage (state, id) {
  const page = state.pages.find(page => page._id === id) // oncherche d'abord la page dans la liste
  state.pages.splice(state.pages.indexOf(page), 1)
}

export function updateOnePage (state, data) {
  const page = state.pages.find(page => page._id === data._id)
  state.pages[state.pages.indexOf(page)] = data
}

export function insertOnePage (state, data) {
  state.pages.push(data)
}
