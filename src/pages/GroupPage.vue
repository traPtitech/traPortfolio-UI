<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/Group/MemberList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'

const groupId = useParam('groupId')

const groupDetail = (await apis.getGroup(groupId.value)).data
</script>

<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ groupDetail.name }}</page-title>
      <external-link :href="groupDetail.link" :class="$style.link">
        紹介ページ
      </external-link>
    </div>
    <member-list :members="groupDetail.members" />
  </page-container>
</template>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
</style>
