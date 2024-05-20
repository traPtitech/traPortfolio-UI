<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/ContestTeam/MemberList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'

const contestId = useParam('contestId')
const teamId = useParam('teamId')
const contestTeamDetail = (
  await apis.getContestTeam(contestId.value, teamId.value)
).data
</script>

<template>
  <page-container>
    <div :class="$style.container">
      <div :class="$style.titleContainer">
        <page-title>チーム {{ contestTeamDetail.name }}</page-title>
        <external-link :href="contestTeamDetail.link">
          説明ページ
        </external-link>
      </div>
      <p>{{ contestTeamDetail.result }}</p>
      <p>{{ contestTeamDetail.description }}</p>
    </div>
    <member-list :members="contestTeamDetail.members" />
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.titleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
