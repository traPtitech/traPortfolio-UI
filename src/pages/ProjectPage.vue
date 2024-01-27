<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/Project/MemberList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'

const projectId = useParam('projectId')
const projectDetail = (await apis.getProject(projectId.value)).data
</script>

<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ projectDetail.name }}</page-title>
      <external-link :href="projectDetail.link" :class="$style.link">
        紹介ページ
      </external-link>
      <p :class="$style.description">{{ projectDetail.description }}</p>
    </div>
    <member-list :members="projectDetail.members" />
  </page-container>
</template>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
.description {
  color: $color-text;
  font-size: 1rem;
}
</style>
../lib/param
