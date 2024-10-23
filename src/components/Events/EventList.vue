<script lang="ts" setup>
import EventListItem from './EventListItem.vue'
import { Event } from '/@/lib/apis'

interface Props {
  events: Event[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.container">
    <event-list-item
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </section>
</template>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
