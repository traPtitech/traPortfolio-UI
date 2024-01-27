<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ProjectList from '/@/components/Projects/ProjectList.vue'
import { useProjectStore } from '/@/store/project'

const projectStore = useProjectStore()

const projects = await projectStore.fetchProjects()
</script>

<template>
  <page-container>
    <page-title :class="$style.title">Project一覧</page-title>
    <project-list :projects="projects" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
