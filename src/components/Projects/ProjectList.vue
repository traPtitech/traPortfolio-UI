<script lang="ts" setup>
import ProjectListItem from './ProjectListItem.vue'
import { Project } from '/@/lib/apis'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$style.container">
    <project-list-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </ul>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
}
</style>
