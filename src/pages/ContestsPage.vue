<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ContestList from '/@/components/Contests/ContestList.vue'
import { useContestStore } from '/@/store/contest'
import { onMounted } from 'vue';

const contestStore = useContestStore()

const contests = await contestStore.fetchContests()

onMounted(() => {
  document.title = 'コンテスト一覧 | traPortfolio'
})
</script>

<template>
  <page-container :paths="[{ name: 'Contests', link: '/contests' }]">
    <div :class="$style.container">
      <page-title>コンテスト一覧</page-title>
      <contest-list :contests="contests" />
    </div>
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
