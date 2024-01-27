<script lang="ts" setup>
import { Event } from '/@/lib/apis'

interface Props {
  events: Event[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <div :class="$style.title">イベント一覧</div>
    <p v-for="event in events" :key="event.id">{{ event.name }}</p>
  </div>
</template>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
