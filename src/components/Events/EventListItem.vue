<template>
  <div>
    <router-link :class="$style.link" :to="`/events/${event.id}`">
      <span :class="$style.name">{{ event.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Event } from '/@/lib/apis'

export default defineComponent({
  name: 'EventListItem',
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
.link {
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
</style>
