<script setup lang="ts">
import { Path } from '/@/components/Layout/BreadCrumbTrail.vue'
import BreadCrumbTrail from '/@/components/Layout/BreadCrumbTrail.vue'

defineProps<{
  paths?: Path[]
}>()
</script>

<template>
  <main :class="$style.container">
    <bread-crumb-trail
      v-if="paths !== undefined"
      :paths="paths"
    />
    <slot />
  </main>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0.5rem 1rem;
}
</style>
