<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import ContestTeamList from '/@/components/Contest/ContestTeamList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'
import { getFullDayWithTimeString } from '/@/lib/date'

const contestId = useParam('contestId')
const contestDetail = (await apis.getContest(contestId.value)).data
</script>

<template>
  <page-container>
    <div :class="$style.container">
      <div :class="$style.titleContainer">
        <page-title>{{ contestDetail.name }}</page-title>
        <external-link :href="contestDetail.link">説明ページ</external-link>
      </div>
      <p :class="$style.duration">
        {{ getFullDayWithTimeString(new Date(contestDetail.duration.since)) }}
        -
        {{
          contestDetail.duration.until &&
          getFullDayWithTimeString(new Date(contestDetail.duration.until))
        }}
      </p>
      <p>{{ contestDetail.description }}</p>
    </div>
    <contest-team-list
      :contest-teams="contestDetail.teams"
      :contest-id="contestId"
    />
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
