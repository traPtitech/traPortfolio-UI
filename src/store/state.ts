import { Group, Event, EventDetail } from '/@/lib/apis'

export interface S {
  groups: Group[] | null
  events: Event[] | null
  eventDetail: Record<string, EventDetail | undefined>
}

export const state: S = {
  groups: null,
  events: null,
  eventDetail: {}
}
