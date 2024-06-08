<script setup lang="ts">
import PageContainer from '/@/components/Layout/PageContainer.vue'
</script>

<template>
  <page-container :class="$style.container">
    <h1>404 Not Found</h1>
    <p>お探しのページは見つかりませんでした。</p>
  </page-container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
