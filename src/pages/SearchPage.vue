<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import UserList from '/@/components/Search/UserList.vue'
import useQuery from '/@/lib/query'
import apis from '/@/lib/apis'
import { onMounted } from 'vue'

const search = useQuery('q')
const users = (await apis.getUsers(undefined, search.value)).data

onMounted(() => {
  document.title = 'ユーザー検索 | traPortfolio'
})
</script>

<template>
  <page-container>
    <div :class="$style.container">
      <page-title>検索結果: {{ search }}</page-title>
      <user-list :members="users" />
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
