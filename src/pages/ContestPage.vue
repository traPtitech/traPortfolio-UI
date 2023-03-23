<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import ContestTeamList from '/@/components/Contest/ContestTeamList.vue'
import { computed, ref, watchEffect } from 'vue'
import useParam from '/@/use/param'
import apis, { ContestDetail } from '/@/lib/apis'

const contestId = useParam('contestId')
const contestDetail = ref<ContestDetail>()
watchEffect(async () => {
  contestDetail.value = (await apis.getContest(contestId.value)).data
})

const name = computed(
  () => contestDetail.value?.name ?? 'Loading... コンテスト'
)
const link = computed(() => contestDetail.value?.link)
const description = computed(() => contestDetail.value?.description)
const contestTeams = computed(() => contestDetail.value?.teams)
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
        説明ページ
      </external-link>
      <p :class="$style.description">{{ description }}</p>
    </div>
    <contest-team-list
      v-if="contestTeams !== undefined"
      :contest-teams="contestTeams"
      :contest-id="contestId"
    />
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
