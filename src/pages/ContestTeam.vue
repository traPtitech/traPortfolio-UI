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
    <div :class="$style.titleContainer">
      <page-title>チーム「{{ contestTeamDetail.name }}」</page-title>
      <external-link :href="contestTeamDetail.link" :class="$style.link">
        説明ページ
      </external-link>
      <p :class="$style.result">{{ contestTeamDetail.result }}</p>
      <p :class="$style.description">{{ contestTeamDetail.description }}</p>
    </div>
    <member-list :members="contestTeamDetail.members" />
  </page-container>
</template>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
.result {
  color: $color-text;
  font-size: 1rem;
}
.description {
  color: $color-text;
  font-size: 1rem;
}
</style>
../lib/param
