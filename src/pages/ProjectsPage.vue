<script lang="ts" setup>
import { onMounted } from 'vue';
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ProjectList from '/@/components/Projects/ProjectList.vue'
import { useProjectStore } from '/@/store/project'

const projectStore = useProjectStore()

const projects = await projectStore.fetchProjects()

onMounted(() => {
  document.title = 'プロジェクト一覧 | traPortfolio'
})
</script>

<template>
  <page-container :paths="[{ name: 'Projects', link: '/projects' }]">
    <div :class="$style.container">
      <page-title>プロジェクト一覧</page-title>
      <project-list :projects="projects" />
    </div>
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
