<script lang="ts" setup>
// defineProps<{
//   bio: string
// }>()

let bio = "おいす～ どうも　どうも　　　おはよう          さ\nこんにちは\n\n\n\nなんですか？あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
</script>

<template>
  <div :class="$style.container">
    <p>{{ bio }}</p>
  </div>
</template>

<style lang="scss" module>
.container {
  white-space: pre-wrap;
  color: $color-text;
  font-size: 0.875rem;
}
</style>
