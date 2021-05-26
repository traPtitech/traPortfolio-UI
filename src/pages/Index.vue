<template>
  <page-container>
    <group-name-list v-if="fetcherStateGroups" :groups="groups" />
    <p v-else>{{ fetcherStateGroups }}</p>
    <div :class="$style.container">
      <recent-list
        v-if="fetcherStateContests"
        :items="contests"
        title="実績"
        path="contests"
      />
      <p v-else>{{ fetcherStateContests }}</p>
    </div>
  </page-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '/@/store'
import useFetcher from '/@/use/fetcher'
import PageContainer from '../components/Layout/PageContainer.vue'
import GroupNameList from '../components/Index/GroupNameList.vue'
import RecentList from '../components/Index/RecentList.vue'

export default defineComponent({
  name: 'Index',
  components: {
    PageContainer,
    GroupNameList,
    RecentList
  },
  setup() {
    const store = useStore()

    const groups = computed(() => store.state.groups)
    const { fetcherState: fetcherStateGroups } = useFetcher(groups, () =>
      store.dispatch.fetchGroups()
    )

    const contests = computed(() => store.state.contests)
    const { fetcherState: fetcherStateContests } = useFetcher(contests, () =>
      store.dispatch.fetchContests()
    )

    return {
      groups,
      fetcherStateGroups,
      contests,
      fetcherStateContests
    }
  }
})
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
}
</style>
