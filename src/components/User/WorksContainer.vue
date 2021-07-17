<template>
  <div :class="$style.title">作品一覧</div>
  <p>{{ works }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { UserProject } from '/@/lib/apis'

export default defineComponent({
  name: 'WorksContainer',
  props: {
    works: {}
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
