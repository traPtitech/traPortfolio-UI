<script lang="ts" setup>
import ProjectListItem from './ProjectListItem.vue'
import { Project } from '/@/lib/apis'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.container">
    <project-list-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  gap: 0.75rem;
}
</style>
