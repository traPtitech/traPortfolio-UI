import { defineActions } from 'direct-vuex'
import { rootActionContext } from '.'
import apis, { Group, Project } from '/@/lib/apis'

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
  async fetchProjects(context): Promise<Project[]> {
    const { state, commit } = rootActionContext(context)

    if (state.projects !== null) {
      return state.projects
    }

    const res = await apis.getProjects()
    commit.setProjects(res.data)
    return res.data
  }
})
