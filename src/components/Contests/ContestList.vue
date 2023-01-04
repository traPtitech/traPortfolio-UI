<template>
  <section :class="$style.container">
    <contest-list-item
      v-for="contest in contests"
      :key="contest.id"
      :contest="contest"
    />
  </section>
</template>

<script lang="ts" setup>
import ContestListItem from './ContestListItem.vue'
import { Contest } from '/@/lib/apis'

interface Props {
  contests: Contest[]
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
