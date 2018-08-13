import {
  addCount,
  reduceCount,
  resetCount
} from './mutation-types'

export default {
  [addCount](state, num) {
    if (num) {
      state.count += num
    } else {
      state.count += 1
    }
  },
  [reduceCount](state, num) {
    if (num) {
      state.count -= num
    } else {
      state.count -= 1
    }
  },
  [resetCount](state) {
    state.count = 0;
  }
}
