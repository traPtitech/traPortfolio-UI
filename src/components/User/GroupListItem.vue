<script lang="ts" setup>
import { computed } from 'vue'
import { UserGroup } from '/@/lib/apis'
import { getGroupOrProjectDuration } from '/@/lib/date'

const props = defineProps<{
  group: UserGroup
}>()

const duration = computed(() => getGroupOrProjectDuration(props.group.duration))
</script>

<template>
  <div>
    {{ `${group.name} (${duration})` }}
  </div>
</template>
