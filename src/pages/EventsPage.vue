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

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import { useEventStore } from '/@/store/event'
import useFetcher from '/@/use/fetcher'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import EventList from '/@/components/Events/EventList.vue'

export default defineComponent({
  name: 'EventsPage',
  components: {
    PageContainer,
    PageTitle,
    EventList
  },
  setup() {
    const eventStore = useEventStore()

    const { events } = storeToRefs(eventStore)
    const { fetcherState } = useFetcher(events, () => eventStore.fetchEvents())

    return { events, fetcherState }
  }
})
</script>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
