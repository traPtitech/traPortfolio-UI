import { defineActions } from 'direct-vuex'
import { rootActionContext } from '.'
import apis, { Group, Event } from '/@/lib/apis'

export const actions = defineActions({
  async fetchGroups(context): Promise<Group[]> {
    const { state, commit } = rootActionContext(context)

    if (state.groups !== null) {
      return state.groups
    }

    const res = await apis.getGroups()
    commit.setGroups(res.data)
    return res.data
  },
  async fetchEvents(context): Promise<Event[]> {
    const { state, commit } = rootActionContext(context)

    if (state.events !== null) {
      return state.events
    }

    const res = await apis.getEvents()
    commit.setEvents(res.data)
    return res.data
  }
})
