import { Group, Event } from '/@/lib/apis'

export interface S {
  groups: Group[] | null
  events: Event[] | null
}

export const state: S = {
  groups: null,
  events: null
}
