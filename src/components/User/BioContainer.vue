<script lang="ts" setup>
defineProps<{
  bio: string
}>()
</script>

<template>
  <div :class="$style.container">
    <p>{{ bio }}</p>
  </div>
</template>

<style lang="scss" module>
.container {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: $color-text;
  font-size: 0.875rem;
}
</style>
