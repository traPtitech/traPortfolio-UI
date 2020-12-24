import { Group, Event, Project } from '/@/lib/apis'

export interface S {
  groups: Group[] | null
  events: Event[] | null
  projects: Project[] | null
}

export const state: S = {
  groups: null,
  events: null,
  projects: null
}
