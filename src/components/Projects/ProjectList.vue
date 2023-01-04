<template>
  <section :class="$style.container">
    <project-list-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script lang="ts" setup>
import ProjectListItem from './ProjectListItem.vue'
import { Project } from '/@/lib/apis'

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
