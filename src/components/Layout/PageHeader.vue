<template>
  <div :class="$style.container">
    <div>Logo</div>
    <search-input />
  </div>
</template>

<script lang="ts" setup>
import SearchInput from '/@/components/UI/SearchInput.vue'
</script>

<style lang="scss" module>
.container {
  display: flex;
  height: 5rem;
  padding: 0 3rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.1rem $color-secondary;
}
</style>
