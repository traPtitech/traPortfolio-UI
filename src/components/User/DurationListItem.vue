<template>
  <div :class="$style.duration">({{ duration }})</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DurationListItem',
  props: {
    duration: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
.duration {
  margin-left: 0.5rem;
}
</style>
