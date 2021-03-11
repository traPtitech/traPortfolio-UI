<template>
  <div :class="$style.title">イベント一覧</div>
  <p></p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'EventsContainer',
  props: {
    events: {
      type: Object as PropType<Array<Event>>,
      default: []
    }
  },
  setup() {}
})
</script>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
