import { Group, Project } from '/@/lib/apis'

export interface S {
  groups: Group[] | null
  projects: Project[] | null
}

export const state: S = {
  groups: null,
  projects: null
}
