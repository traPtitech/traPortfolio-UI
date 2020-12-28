import { defineMutations } from 'direct-vuex'
import { S } from './state'
import { Group, Event, EventDetail } from '/@/lib/apis'

export const mutations = defineMutations<S>()({
  setGroups(state: S, groups: Group[]) {
    state.groups = groups
  },
  setEvents(state: S, events: Event[]) {
    state.events = events
  },
  setEventDetail(state: S, eventDetail: EventDetail) {
    state.eventDetail[eventDetail.id] = eventDetail
  }
})
