<script lang="ts" setup>
import ContestTeamListItem from './ContestTeamListItem.vue'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'
import { ContestTeam } from '/@/lib/apis'

interface Props {
  contestTeams: ContestTeam[]
  contestId: string
}

defineProps<Props>()
</script>

<template>
  <section>
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
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
