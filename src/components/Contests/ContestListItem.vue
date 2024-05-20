<script lang="ts" setup>
import { Contest } from '/@/lib/apis'
import { getFullDayWithTimeString } from '/@/lib/date'

defineProps<{
  contest: Contest
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/contests/${contest.id}`">
      <span :class="$style.name">{{ contest.name }}</span>
      <span :class="$style.date">
        {{ getFullDayWithTimeString(new Date(contest.duration.since)) }} -
        {{
          contest.duration.until &&
          getFullDayWithTimeString(new Date(contest.duration.until))
        }}
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
