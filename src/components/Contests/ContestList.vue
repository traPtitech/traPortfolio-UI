<script lang="ts" setup>
import ContestListItem from './ContestListItem.vue'
import { Contest } from '/@/lib/apis'

interface Props {
  contests: Contest[]
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.container">
    <contest-list-item
      v-for="contest in contests"
      :key="contest.id"
      :contest="contest"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  gap: 0.75rem;
}
</style>
