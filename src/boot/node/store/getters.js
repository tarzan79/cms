export const getAllnodes = state => {
  if (state.nodes != null) {
    return state.nodes
  } else {
    console.log(state)
    // return state.$store.dispatch('getAllPages')
  }
}

export const getOneNode = (state) => (name) => {
  return state.nodes.find(node => node.formatedName === name)
}

export const getAllElements = (state) => (node) => {
  if (state.nodes != null) {
    return state.nodes
  }
}
