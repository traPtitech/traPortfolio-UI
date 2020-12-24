import { defineMutations } from 'direct-vuex'
import { S } from './state'
import { Group, Event,Project } from '/@/lib/apis'

export const mutations = defineMutations<S>()({
  setGroups(state: S, groups: Group[]) {
    state.groups = groups
  },
  setEvents(state: S, events: Event[]) {
    state.events = events
  },
  setProjects(state:S,projects: Project[]){
    state.projects = projects;
})
