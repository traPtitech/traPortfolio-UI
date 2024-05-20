<script lang="ts" setup>
import ContestTeamListItem from './ContestTeamListItem.vue'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'
import { ContestTeam } from '/@/lib/apis'

defineProps<{
  contestTeams: ContestTeam[]
  contestId: string
}>()
</script>

<template>
  <section :class="$style.section">
    <section-title>チーム</section-title>
    <div :class="$style.container">
      <contest-team-list-item
        v-for="contestTeam in contestTeams"
        :key="contestTeam.id"
        :contest-team="contestTeam"
        :contest-id="contestId"
      />
    </div>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
