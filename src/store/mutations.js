import {SEACH_TODO} from './mutation-types.js'

export default {
  [SEACH_TODO] (state, {searchPopUp}) {
    state.searchPopUp = searchPopUp
  }
}
