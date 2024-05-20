<script lang="ts" setup>
import GroupListItem from './GroupListItem.vue'
import { Group } from '/@/lib/apis'

interface Props {
  groups: Group[]
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.container">
    <group-list-item v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<style lang="scss" module>
.container {
  gap: 0.75rem;
}
</style>
