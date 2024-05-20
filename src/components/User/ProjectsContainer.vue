<script lang="ts" setup>
import { UserProject } from '/@/lib/apis'
import ProjectList from '/@/components/Projects/ProjectList.vue'

interface Props {
  projects: UserProject[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <h2 :class="$style.title">参加プロジェクト</h2>
    <project-list :projects="projects" />
  </section>
</template>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 1.25rem;
}
</style>
