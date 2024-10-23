<script lang="ts" setup>
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 24
})
</script>

<template>
  <Icon
    :icon="name"
    :class="$style.icon"
    :width="size"
    :height="size"
  />
</template>

<style lang="scss" module>
.icon {
  contain: strict;
}
</style>
