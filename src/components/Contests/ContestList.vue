<script lang="ts" setup>
import ContestListItem from './ContestListItem.vue'
import { Contest } from '/@/lib/apis'

interface Props {
  contests: Contest[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$style.container">
    <contest-list-item
      v-for="contest in contests"
      :key="contest.id"
      :contest="contest"
    />
  </ul>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}
</style>
