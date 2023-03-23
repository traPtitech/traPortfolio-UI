<script lang="ts" setup>
import { computed } from 'vue'
import { Project, Semester } from '/@/lib/apis'

const props = defineProps<{
  project: Project
}>()

const date = computed(() => {
  const semester =
    props.project.duration.since.semester == Semester.first ? '前期' : '後期'
  return `${props.project.duration.since.year}${semester}`
})
</script>

<template>
  <div>
    <router-link :class="$style.link" :to="`/projects/${project.id}`">
      <span :class="$style.name">{{ project.name }}</span>
      <span :class="$style.date">({{ date }}~)</span>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.link {
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
.date {
  color: $color-text;
  font-size: 1.5rem;
  margin: 0 0.5em;
}
</style>
