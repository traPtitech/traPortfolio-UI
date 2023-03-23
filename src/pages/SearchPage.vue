<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import MemberList from '/@/components/ContestTeam/MemberList.vue'
import { ref, watchEffect } from 'vue'
import useQuery from '/@/use/query'
import apis, { User } from '/@/lib/apis'

const search = useQuery('q')
const users = ref<User[]>()
watchEffect(async () => {
  users.value = (await apis.getUsers(false, search.value)).data
})
</script>

<template>
  <page-container>
    <page-title :class="$style.title">検索結果: {{ search }}</page-title>
    <member-list v-if="users !== undefined" :members="users" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
