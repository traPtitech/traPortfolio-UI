<script lang="ts" setup>
import { UserProject } from '/@/lib/apis'
import ProjectList from '/@/components/Projects/ProjectList.vue'

interface Props {
  projects: UserProject[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <h2 :class="$style.title">
      参加プロジェクト
    </h2>
    <project-list
      v-if="projects.length > 0"
      :projects="projects"
    />
    <p v-else>
      これまでに参加したプロジェクトはありません
    </p>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.title {
  color: $color-text;
  font-size: 1rem;
}
</style>
