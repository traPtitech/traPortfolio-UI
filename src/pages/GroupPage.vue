<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import AdminList from '/@/components/Group/AdminList.vue'
import MemberList from '/@/components/Group/MemberList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'
import { onMounted } from 'vue'

const groupId = useParam('groupId')
const groupDetail = (await apis.getGroup(groupId.value)).data

onMounted(() => {
  document.title = `${groupDetail.name} | traPortfolio`
})
</script>

<template>
  <page-container
    :paths="[
      { name: 'Groups', link: { name: 'Groups' } },
      {
        name: groupDetail.name,
        link: { name: 'Group', params: { groupId: groupId } }
      }
    ]"
  >
    <div :class="$style.container">
      <div :class="$style.titleContainer">
        <page-title>{{ groupDetail.name }}</page-title>
        <external-link
          :href="groupDetail.link"
          :class="$style.link"
        >
          紹介ページ
        </external-link>
      </div>
      <p>{{ groupDetail.description }}</p>
    </div>
    <admin-list :admins="groupDetail.admin" />
    <member-list :members="groupDetail.members" />
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.titleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
