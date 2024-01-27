<script lang="ts" setup>
import { ContestTeam } from '/@/lib/apis'

defineProps<{
  contestTeam: ContestTeam
  contestId: string
}>()
</script>

<template>
  <div>
    <router-link
      :class="$style.link"
      :to="`/contests/${contestId}/${contestTeam.id}`"
    >
      <span :class="$style.name">{{ contestTeam.name }}</span>
      <span v-if="contestTeam.result" :class="$style.result">
        ({{ contestTeam.result }})
      </span>
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
.result {
  color: $color-text;
  font-size: 1.5rem;
  margin: 0 0.5em;
}
</style>
