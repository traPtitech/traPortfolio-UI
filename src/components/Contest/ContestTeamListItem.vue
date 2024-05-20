<script lang="ts" setup>
import { ContestTeam } from '/@/lib/apis'

defineProps<{
  contestTeam: ContestTeam
  contestId: string
}>()
</script>

<template>
  <div :class="$style.container">
    <router-link
      :class="$style.link"
      :to="`/contests/${contestId}/${contestTeam.id}`"
    >
      <span :class="$style.name">{{ contestTeam.name }}</span>
      <span v-if="contestTeam.result" :class="$style.result">
        ({{ contestTeam.result }})
      </span>
    </router-link>
    <!--TODO: icons-->
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  gap: 0.5rem;
}
.link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: $color-text;
  text-decoration: none;
}
.name {
  font-size: 1.25rem;
}
</style>
