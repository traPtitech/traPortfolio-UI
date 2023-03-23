<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import EventList from '/@/components/Events/EventList.vue'
import { storeToRefs } from 'pinia'

import { useEventStore } from '/@/store/event'
import useFetcher from '/@/use/fetcher'

const eventStore = useEventStore()

const { events } = storeToRefs(eventStore)
const { fetcherState } = useFetcher(events, () => eventStore.fetchEvents())
</script>

<template>
  <page-container>
    <page-title :class="$style.title">イベント一覧</page-title>
    <event-list
      v-if="fetcherState === 'loaded' && events !== null"
      :events="events"
    />
    <p v-else>{{ fetcherState }}</p>
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
