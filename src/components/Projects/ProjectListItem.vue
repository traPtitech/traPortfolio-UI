<script lang="ts" setup>
import { Project } from '/@/lib/apis'
import { getGroupOrProjectDuration } from '/@/lib/date'

defineProps<{
  project: Project
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/projects/${project.id}`">
      <span :class="$style.name">{{ project.name }}</span>
      <span :class="$style.date">
        {{ getGroupOrProjectDuration(project.duration) }}
      </span>
    </router-link>
  </li>
</template>

<style lang="scss" module>
.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 1.25rem;
}
.date {
  color: $color-text-secondary;
  font-size: 0.75rem;
}
</style>
