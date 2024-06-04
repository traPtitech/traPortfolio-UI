<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import GroupList from '/@/components/Groups/GroupList.vue'
import { useGroupStore } from '/@/store/group'

const groupStore = useGroupStore()
const groups = await groupStore.fetchGroups()
</script>

<template>
  <page-container :paths="[{ name: 'Groups', link: '/groups' }]">
    <div :class="$style.container">
      <page-title>班一覧</page-title>
      <group-list :groups="groups" />
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
