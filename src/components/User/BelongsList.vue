<template>
  <section>
    <group-list-item v-for="group in groups" :key="group.id" :group="group" />
    <project-list-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script lang="ts" setup>
import GroupListItem from './GroupListItem.vue'
import ProjectListItem from './ProjectListItem.vue'
import { UserGroup, UserProject } from '/@/lib/apis'

interface Props {
  groups: UserGroup[]
  projects: UserProject[]
}

defineProps<Props>()
</script>
