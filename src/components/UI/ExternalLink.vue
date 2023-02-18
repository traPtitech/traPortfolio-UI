<template>
  <a :class="$style.container">
    <a-icon name="mdi:open-in-new" :class="$style.icon" />
    <slot />
  </a>
</template>

<script lang="ts" setup>
import AIcon from './AIcon.vue'
</script>

<style lang="scss" module>
.container {
  display: flex;
}
.icon {
  margin-right: 0.25rem;
}
</style>
