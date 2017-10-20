
export default {
  Update_Seachstate ({
    commit,
    state
  }) {
    var S = false
    if (state.searchPopUp) {
      S = false
    } else {
      S = true
    }
    commit('SEACH_TODO', {searchPopUp: S})
  }
}
