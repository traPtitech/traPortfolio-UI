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
  color: $color-text;
  font-size: 0.875rem;
}
</style>
