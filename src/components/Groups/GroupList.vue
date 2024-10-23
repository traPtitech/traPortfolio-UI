<script lang="ts" setup>
import GroupListItem from './GroupListItem.vue'
import { Group } from '/@/lib/apis'

interface Props {
  groups: Group[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$style.container">
    <group-list-item
      v-for="group in groups"
      :key="group.id"
      :group="group"
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
