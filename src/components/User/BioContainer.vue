<script lang="ts" setup>
defineProps<{
  bio: string
}>()
</script>

<template>
  <div>
    <div :class="$style.title">自己紹介文</div>
    <p>{{ bio }}</p>
  </div>
</template>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
