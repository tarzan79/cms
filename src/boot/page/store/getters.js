export const getAllPages = state => {
  if (state.pages != null) {
    return state.pages
  } else {
    console.log('pas de page')
    // return state.$store.dispatch('getAllPages')
  }
}

export const getOnePage = (state) => (name) => {
  return state.pages.find(page => page.formatedTitle === name)
}
