<script lang="ts" setup>
import { ContestTeam } from '/@/lib/apis'
import UserIcons from '/@/components/UI/UserIcons.vue'

defineProps<{
  contestTeam: ContestTeam
  contestId: string
}>()
</script>

<template>
  <li :class="$style.container">
    <router-link
      :class="$style.link"
      :to="`/contests/${contestId}/teams/${contestTeam.id}`"
    >
      <span :class="$style.name">{{ contestTeam.name }}</span>
      <span v-if="contestTeam.result" :class="$style.result">
        ({{ contestTeam.result }})
      </span>
    </router-link>
    <user-icons :user-ids="contestTeam.members.map(u => u.id)" />
  </li>
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
