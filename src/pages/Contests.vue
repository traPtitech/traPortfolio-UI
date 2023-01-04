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

<script lang="ts">
import { defineComponent } from 'vue'
import { useContestStore } from '/@/store/contest'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ContestList from '/@/components/Contests/ContestList.vue'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'Contests',
  components: {
    PageContainer,
    PageTitle,
    ContestList
  },
  setup() {
    const contestStore = useContestStore()

    const { contests } = storeToRefs(contestStore)
    const { fetcherState } = useFetcher(contests, () =>
      contestStore.fetchContests()
    )

    return { contests, fetcherState }
  }
})
</script>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
