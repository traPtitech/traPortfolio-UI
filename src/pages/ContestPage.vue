<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import ContestTeamList from '/@/components/Contest/ContestTeamList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'

const contestId = useParam('contestId')
const contestDetail = (await apis.getContest(contestId.value)).data
</script>

<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ contestDetail.name }}</page-title>
      <external-link :href="contestDetail.link" :class="$style.link">
        説明ページ
      </external-link>
      <p :class="$style.description">{{ contestDetail.description }}</p>
    </div>
    <contest-team-list
      :contest-teams="contestDetail.teams"
      :contest-id="contestId"
    />
  </page-container>
</template>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
.description {
  color: $color-text;
  font-size: 1rem;
}
</style>
../lib/param
