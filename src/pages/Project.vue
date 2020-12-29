<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ name }}</page-title>
      <external-link :href="link" :class="$style.link">
        紹介ページ
      </external-link>
    </div>
    <member-list v-if="members !== undefined" :members="members" />
  </page-container>
</template>

<script lang="ts">
import { computed, ref, defineComponent, watchEffect } from 'vue'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import useParam from '/@/use/param'
import apis, { ProjectDetail } from '/@/lib/apis'
import MemberList from '/@/components/Project/MemberList.vue'

const getProject = async (projectId: string): Promise<ProjectDetail> =>
  (await apis.getProject(projectId)).data

export default defineComponent({
  name: 'Project',
  components: {
    PageContainer,
    PageTitle,
    ExternalLink,
    MemberList
  },
  setup() {
    const projectId = useParam('projectId')
    const projectDetail = ref<ProjectDetail>()
    watchEffect(() => {
      getProject(projectId.value).then(
        response => (projectDetail.value = response)
      )
    })

    const name = computed(
      () => projectDetail.value?.name ?? 'Loading... プロジェクト'
    )
    const link = 'https://trap.jp'
    const members = computed(() => projectDetail.value?.members)
    return { name, link, members }
  }
})
</script>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
</style>
