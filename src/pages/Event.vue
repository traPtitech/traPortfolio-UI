<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ name }}</page-title>
      <external-link :href="link" :class="$style.link">
        説明ページ
      </external-link>
      <hostname-list v-if="fetcherState === 'loaded'" :hostnames="hostnames" />
      <p v-else>{{ fetcherState }}</p>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '/@/store'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import useParam from '/@/use/param'

export default defineComponent({
  name: 'Event',
  components: {
    PageContainer,
    PageTitle,
    ExternalLink
  },
  setup() {
    const store = useStore()
    const eventId = useParam('eventId')

    const eventDetail = computed(() => store.state.eventDetail[eventId.value])
    const { fetcherState } = useFetcher(eventDetail, () =>
      store.dispatch.fetchEventDetail(eventId.value)
    )

    const name = computed(
      () => eventDetail.value?.name ?? 'Loading... イベント'
    )
    const link = 'https://trap.jp' // TODO

    return { fetcherState, name, link }
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
