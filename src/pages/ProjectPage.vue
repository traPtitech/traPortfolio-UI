<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/Project/MemberList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'
import { getGroupOrProjectDuration } from '/@/lib/date'
import { onMounted } from 'vue'

const projectId = useParam('projectId')
const projectDetail = (await apis.getProject(projectId.value)).data

onMounted(() => {
  document.title = `${projectDetail.name} | traPortfolio`
})
</script>

<template>
  <page-container
    :paths="[
      { name: 'Projects', link: '/projects' },
      {
        name: projectDetail.name,
        link: `/projects/${projectId}`
      }
    ]"
  >
    <div :class="$style.container">
      <div :class="$style.titleContainer">
        <page-title>{{ projectDetail.name }}</page-title>
        <external-link :href="projectDetail.link" :class="$style.link">
          紹介ページ
        </external-link>
      </div>
      <p>{{ getGroupOrProjectDuration(projectDetail.duration) }}</p>
      <p>{{ projectDetail.description }}</p>
    </div>
    <member-list :members="projectDetail.members" />
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
