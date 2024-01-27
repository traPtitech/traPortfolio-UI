<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import GroupList from '/@/components/Groups/GroupList.vue'
import { useGroupStore } from '/@/store/group'

const groupStore = useGroupStore()
const groups = await groupStore.fetchGroups()
</script>

<template>
  <page-container>
    <page-title :class="$style.title">班一覧</page-title>
    <group-list :groups="groups" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
