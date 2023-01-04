<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ name }}</page-title>
      <external-link :href="link" :class="$style.link">
        紹介ページ
      </external-link>
    </div>
    <member-list v-if="fetcherState === 'loaded'" :members="members" />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import useParam from '/@/use/param'
import apis, { GroupDetail } from '/@/lib/apis'
import { useGroupStore } from '/@/store/group'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/Group/MemberList.vue'

export default defineComponent({
  name: 'Group',
  components: {
    PageContainer,
    PageTitle,
    ExternalLink,
    MemberList
  },
  setup() {
    const groupId = useParam('groupId')
    const groupStore = useGroupStore()

    const { groups } = storeToRefs(groupStore)
    const { fetcherState } = useFetcher(groups, () => groupStore.fetchGroups())
    const group = computed(() =>
      groups.value?.find(g => g.id === groupId.value)
    )

    const groupDetail = ref<GroupDetail>()
    watchEffect(async () => {
      groupDetail.value = (await apis.getGroup(groupId.value)).data
    })

    const name = computed(() => group.value?.name ?? 'Loading... 班')
    const link = 'https://trap.jp' // TODO
    const members = computed(() => groupDetail.value?.members)

    return { fetcherState, name, link, members }
  }
})
</script>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
</style>
