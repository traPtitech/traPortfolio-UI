<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import MemberList from '/@/components/Project/MemberList.vue'
import { computed, ref, watchEffect } from 'vue'
import useParam from '/@/use/param'
import apis, { ProjectDetail } from '/@/lib/apis'

const projectId = useParam('projectId')
const projectDetail = ref<ProjectDetail>()
watchEffect(async () => {
  projectDetail.value = (await apis.getProject(projectId.value)).data
})

const name = computed(
  () => projectDetail.value?.name ?? 'Loading... プロジェクト'
)
const link = computed(() => projectDetail.value?.link)
const members = computed(() => projectDetail.value?.members)
const description = computed(() => projectDetail.value?.description)
</script>

<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ name }}</page-title>
      <external-link
        v-if="link !== undefined"
        :href="link"
        :class="$style.link"
      >
        紹介ページ
      </external-link>
      <p :class="$style.description">{{ description }}</p>
    </div>
    <member-list v-if="members !== undefined" :members="members" />
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
