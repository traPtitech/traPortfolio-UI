import { defineActions } from 'direct-vuex'
import { rootActionContext } from '.'
import apis, { Group, Event, EventDetail } from '/@/lib/apis'

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
  },
  async fetchEventDetail(
    context,
    eventId: string
  ): Promise<EventDetail | undefined> {
    const { state, commit } = rootActionContext(context)

    if (state.eventDetail[eventId] !== undefined) {
      return state.eventDetail[eventId]
    }

    const res = await apis.getEvent(eventId)

    // 今はapiをたたくたびに値が変わる（event uuid もランダム）のでeventIdを一致させておく
    // nameなどもランダムなので，EventsページとEventページの表示が異なる
    res.data.id = eventId
    // *******************

    commit.setEventDetail(res.data)
    return res.data
  }
})
