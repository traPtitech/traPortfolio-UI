import { Group } from '/@/lib/apis'

export interface S {
  groups: Group[] | null
}

export const state: S = {
  groups: null
}
