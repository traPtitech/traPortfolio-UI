<template>
  <div>
    <div :class="$style.title">実績</div>
    <p v-for="contest in contests" :key="contest.id">{{ contest.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { UserContest } from '/@/lib/apis'

interface Props {
  contests: UserContest[]
}

defineProps<Props>()
</script>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
