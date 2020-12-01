<template>
  <div :class="$style.container">
    <div>Logo</div>
    <div>search</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.container {
  display: flex;
}
</style>
