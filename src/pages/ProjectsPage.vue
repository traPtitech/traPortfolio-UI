<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ProjectList from '/@/components/Projects/ProjectList.vue'
import { useProjectStore } from '/@/store/project'
import useFetcher from '/@/use/fetcher'
import { storeToRefs } from 'pinia'

const projectStore = useProjectStore()

const { projects } = storeToRefs(projectStore)
const { fetcherState } = useFetcher(projects, () =>
  projectStore.fetchProjects()
)
</script>

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

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
