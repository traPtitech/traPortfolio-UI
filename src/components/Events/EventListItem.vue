<script lang="ts" setup>
import { computed } from 'vue'
import { Event } from '/@/lib/apis'
import { getFullDayString } from '/@/lib/date'

const props = defineProps<{
  event: Event
}>()

const date = computed(() =>
  getFullDayString(new Date(props.event.duration.since))
)
</script>

<template>
  <div>
    <router-link :class="$style.link" :to="`/events/${event.id}`">
      <span :class="$style.name">{{ event.name }}</span>
      <span :class="$style.date">({{ date }})</span>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.link {
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
.date {
  color: $color-text;
  font-size: 1.5rem;
  margin: 0 0.5em;
}
</style>
