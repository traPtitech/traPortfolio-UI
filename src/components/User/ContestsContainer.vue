<template>
  <div :class="$style.title">実績</div>
  <p></p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'ContestsContainer',
  props: {
    contests: {
      type: Object as PropType<Array<ContestTeamWithContestName>>,
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
