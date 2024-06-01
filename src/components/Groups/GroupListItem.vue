<script lang="ts" setup>
import { Group } from '/@/lib/apis'

defineProps<{
  group: Group
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/groups/${group.id}`">
      <span :class="$style.name">{{ group.name }}</span>
    </router-link>
  </li>
</template>

<style lang="scss" module>
.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 1.25rem;
}
</style>
