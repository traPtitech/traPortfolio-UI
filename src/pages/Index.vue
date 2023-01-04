<template>
  <page-container>
    <search-input
      size="large"
      placeholder="ユーザー検索"
      :class="$style.search"
    />
    <group-name-list
      v-if="fetcherStateGroups === 'loaded' && groups !== null"
      :groups="groups"
      :class="$style.groupName"
    />
    <p v-else>{{ fetcherStateGroups }}</p>
    <div :class="$style.container">
      <recent-list
        v-if="fetcherStateContests === 'loaded' && contests !== null"
        :items="contests"
        title="実績"
        path="contests"
      />
      <p v-else>{{ fetcherStateContests }}</p>
      <recent-list
        v-if="fetcherStateProjects === 'loaded' && projects !== null"
        :items="projects"
        title="プロジェクト"
        path="projects"
      />
      <p v-else>{{ fetcherStateProjects }}</p>
      <recent-list
        v-if="fetcherStateProjects === 'loaded' && events !== null"
        :items="events"
        title="イベント"
        path="events"
      />
      <p v-else>{{ fetcherStateEvents }}</p>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useGroupStore } from '/@/store/group'
import { useContestStore } from '/@/store/contest'
import { useProjectStore } from '/@/store/project'
import { useEventStore } from '/@/store/event'
import useFetcher from '/@/use/fetcher'

import PageContainer from '/@/components/Layout/PageContainer.vue'
import SearchInput from '/@/components/UI/SearchInput.vue'
import GroupNameList from '/@/components/Index/GroupNameList.vue'
import RecentList from '/@/components/Index/RecentList.vue'

export default defineComponent({
  name: 'Index',
  components: {
    SearchInput,
    PageContainer,
    GroupNameList,
    RecentList
  },
  setup() {
    const groupStore = useGroupStore()
    const { groups } = storeToRefs(groupStore)
    const { fetcherState: fetcherStateGroups } = useFetcher(groups, () =>
      groupStore.fetchGroups()
    )

    const contestStore = useContestStore()
    const { contests } = storeToRefs(contestStore)
    const { fetcherState: fetcherStateContests } = useFetcher(contests, () =>
      contestStore.fetchContests()
    )

    const projectStore = useProjectStore()
    const { projects } = storeToRefs(projectStore)
    const { fetcherState: fetcherStateProjects } = useFetcher(projects, () =>
      projectStore.fetchProjects()
    )

    const eventStore = useEventStore()
    const { events } = storeToRefs(eventStore)
    const { fetcherState: fetcherStateEvents } = useFetcher(events, () =>
      eventStore.fetchEvents()
    )

    return {
      groups,
      fetcherStateGroups,
      contests,
      fetcherStateContests,
      projects,
      fetcherStateProjects,
      events,
      fetcherStateEvents
    }
  }
})
</script>

<style lang="scss" module>
.search {
  margin: 4rem auto;
  width: 55%;
}
.group-name {
  margin: 4rem 0;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
  margin: 4rem 0;
}
</style>
