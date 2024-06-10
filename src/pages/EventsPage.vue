<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import EventList from '/@/components/Events/EventList.vue'
import { useEventStore } from '/@/store/event'
import { onMounted } from 'vue'

const eventStore = useEventStore()

const events = await eventStore.fetchEvents()

onMounted(() => {
  document.title = 'イベント一覧 | traPortfolio'
})
</script>

<template>
  <page-container>
    <page-title :class="$style.title">イベント一覧</page-title>
    <event-list :events="events" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
</style>
