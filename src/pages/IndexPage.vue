<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import SearchInput from '/@/components/UI/SearchInput.vue'
import GroupNameList from '/@/components/Index/GroupNameList.vue'
import RecentList from '/@/components/Index/RecentList.vue'
import { useGroupStore } from '/@/store/group'
import { useContestStore } from '/@/store/contest'
import { useProjectStore } from '/@/store/project'
// import { useEventStore } from '/@/store/event'

const groupStore = useGroupStore()
const contestStore = useContestStore()
const projectStore = useProjectStore()
// const eventStore = useEventStore()

const groups = await groupStore.fetchGroups()
const contests = await contestStore.fetchContests()
const projects = await projectStore.fetchProjects()
// const events = await eventStore.fetchEvents()
</script>

<template>
  <page-container>
    <search-input
      size="large"
      placeholder="ユーザー検索"
      :class="$style.search"
    />
    <group-name-list :groups="groups" :class="$style.groupName" />
    <div :class="$style.container">
      <recent-list :items="contests" title="実績" path="contests" />
      <recent-list :items="projects" title="プロジェクト" path="projects" />
      <!-- <recent-list :items="events" title="イベント" path="events" /> -->
    </div>
  </page-container>
</template>

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
