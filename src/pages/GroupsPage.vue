<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import GroupList from '/@/components/Groups/GroupList.vue'
import { storeToRefs } from 'pinia'
import { useGroupStore } from '/@/store/group'
import useFetcher from '/@/use/fetcher'

const groupStore = useGroupStore()
const { groups } = storeToRefs(groupStore)
const { fetcherState } = useFetcher(groups, () => groupStore.fetchGroups())
</script>

<template>
  <page-container>
    <page-title :class="$style.title">班一覧</page-title>
    <group-list
      v-if="fetcherState === 'loaded' && groups !== null"
      :groups="groups"
    />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
