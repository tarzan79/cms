export function getAllNodes (state, allNodes) {
  state.nodes = allNodes
}

export function getOneNode (state, oneNode) {
  state.nodes.push(oneNode)
}

export function deleteOneNode (state, id) {
  const node = state.nodes.find(node => node._id === id) // oncherche d'abord la page dans la liste
  state.nodes.splice(state.nodes.indexOf(node), 1)
}

export function updateOneNode (state, data) {
  const node = state.nodes.find(node => node._id === data._id)
  state.nodes[state.nodes.indexOf(node)] = data
}

export function insertOneNode (state, data) {
  state.nodes.push(data)
}
