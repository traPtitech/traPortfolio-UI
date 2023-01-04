<template>
  <section :class="$style.container">
    <group-list-item v-for="group in groups" :key="group.id" :group="group" />
  </section>
</template>

<script lang="ts" setup>
import GroupListItem from './GroupListItem.vue'
import { Group } from '/@/lib/apis'

interface Props {
  groups: Group[]
}

defineProps<Props>()
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
