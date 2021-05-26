<template>
  <page-container>
    <group-name-list v-if="fetcherStateGroups" :groups="groups" />
  </page-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '/@/store'
import useFetcher from '/@/use/fetcher'
import PageContainer from '../components/Layout/PageContainer.vue'
import GroupNameList from '../components/index/GroupNameList.vue'

export default defineComponent({
  name: 'Index',
  components: {
    PageContainer,
    GroupNameList
  },
  setup() {
    const store = useStore()

    const groups = computed(() => store.state.groups)
    const { fetcherState: fetcherStateGroups } = useFetcher(groups, () =>
      store.dispatch.fetchGroups()
    )

    return {
      groups,
      fetcherStateGroups
    }
  }
})
</script>
