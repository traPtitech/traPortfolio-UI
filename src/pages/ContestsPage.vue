<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ContestList from '/@/components/Contests/ContestList.vue'
import { useContestStore } from '/@/store/contest'
import useFetcher from '/@/use/fetcher'
import { storeToRefs } from 'pinia'

const contestStore = useContestStore()

const { contests } = storeToRefs(contestStore)
const { fetcherState } = useFetcher(contests, () =>
  contestStore.fetchContests()
)
</script>

<template>
  <page-container>
    <page-title :class="$style.title">コンテスト一覧</page-title>
    <contest-list
      v-if="fetcherState === 'loaded' && contests !== null"
      :contests="contests"
    />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
