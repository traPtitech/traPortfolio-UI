<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import UserList from '/@/components/Search/UserList.vue'
import useQuery from '/@/lib/query'
import { onMounted } from 'vue'

const query = useQuery('q')

onMounted(() => {
  document.title = 'ユーザー検索 | traPortfolio'
})
</script>

<template>
  <page-container>
    <div :class="$style.container">
      <page-title>検索結果: {{ query }}</page-title>
      <suspense :key="query">
        <user-list :query="query ?? ''" />
        <template #fallback> loading... </template>
      </suspense>
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
