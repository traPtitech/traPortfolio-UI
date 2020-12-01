import { defineMutations } from 'direct-vuex'
import { S } from './state'
import { Group } from '/@/lib/apis'

export const mutations = defineMutations<S>()({
  setGroups(state: S, groups: Group[]) {
    state.groups = groups
  }
})
