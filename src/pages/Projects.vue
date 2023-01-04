<template>
  <page-container>
    <page-title :class="$style.title">Project一覧</page-title>
    <project-list
      v-if="fetcherState === 'loaded' && projects !== null"
      :projects="projects"
    />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectStore } from '/@/store/project'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ProjectList from '/@/components/Projects/ProjectList.vue'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'Projects',
  components: {
    PageContainer,
    PageTitle,
    ProjectList
  },
  setup() {
    const projectStore = useProjectStore()

    const { projects } = storeToRefs(projectStore)
    const { fetcherState } = useFetcher(projects, () =>
      projectStore.fetchProjects()
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
