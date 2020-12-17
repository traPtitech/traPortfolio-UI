<template>
  <div>
    <router-link :class="$style.link" :to="`/events/${event.id}`">
      <span :class="$style.name">{{ event.name }}</span>
      <span :class="$style.date">({{ state.date }})</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue'
import { Event } from '/@/lib/apis'
import { getSinceDate } from '/@/lib/date'

export default defineComponent({
  name: 'EventListItem',
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      date: computed(() => getSinceDate(props.event.duration.since))
    })
    return { state }
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
.date {
  color: $color-text;
  font-size: 1.5rem;
}
</style>
