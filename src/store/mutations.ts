import { defineMutations } from 'direct-vuex'
import { S } from './state'
import { Group, Event, Project } from '/@/lib/apis'

export const mutations = defineMutations<S>()({
  setGroups(state: S, groups: Group[]) {
    state.groups = groups
  },
  setEvents(state: S, events: Event[]) {
    state.events = events
  },
  setProjects(state: S, projects: Project[]) {
    const ProjectsSortedByDurationSince = projects.map(project => {
      project.duration = project.duration.sort(
        (a, b) => new Date(a.since).getTime() - new Date(b.since).getTime()
      )
      return project
    })
    state.projects = ProjectsSortedByDurationSince
  }
})
