<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ContestList from '/@/components/Contests/ContestList.vue'
import { useContestStore } from '/@/store/contest'

const contestStore = useContestStore()

const contests = await contestStore.fetchContests()
</script>

<template>
  <page-container>
    <page-title :class="$style.title">コンテスト一覧</page-title>
    <contest-list :contests="contests" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
