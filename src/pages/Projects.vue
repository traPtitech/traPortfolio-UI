<template>
  <page-container>
    <page-title :class="$style.title">Project一覧</page-title>
    <project-list v-if="fetcherState === 'loaded'" :projects="projects" />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '/@/store'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ProjectList from '/@/components/Projects/ProjectList.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    PageContainer,
    PageTitle,
    ProjectList
  },
  setup() {
    const store = useStore()

    const projects = computed(() => {
      let projects = store.state.projects

      if (projects !== null) {
        let projectsSortedByDurationSince = projects.map(project => {
          project.duration = project.duration.sort(
            (a, b) => Date.parse(a.since) - Date.parse(b.since)
          )
          return project
        })
        projects = projectsSortedByDurationSince
      }

      return projects
    })
    const { fetcherState } = useFetcher(projects, () =>
      store.dispatch.fetchProjects()
    )

    return { projects, fetcherState }
  }
})
</script>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
