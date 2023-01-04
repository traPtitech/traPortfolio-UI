<template>
  <page-container>
    <page-title :class="$style.title">班一覧</page-title>
    <group-list v-if="fetcherState === 'loaded'" :groups="groups" />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useGroupStore } from '/@/store/group'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import GroupList from '/@/components/Groups/GroupList.vue'

export default defineComponent({
  name: 'Groups',
  components: {
    PageContainer,
    PageTitle,
    GroupList
  },
  setup() {
    const groupStore = useGroupStore()
    const { groups } = storeToRefs(groupStore)
    const { fetcherState } = useFetcher(groups, () => groupStore.fetchGroups())

    return { groups, fetcherState }
  }
})
</script>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
