<script lang="ts" setup>
import AIcon from './AIcon.vue'
</script>

<template>
  <a :class="$style.container" target="_blank" rel="noreferrer noopener">
    <a-icon name="mdi:open-in-new" :class="$style.icon" />
    <slot />
  </a>
</template>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text-secondary);
}
</style>
