<script lang="ts" setup>
import { computed } from 'vue'
import { UserProject } from '/@/lib/apis'
import { getGroupOrProjectDuration } from '/@/lib/date'

const props = defineProps<{
  project: UserProject
}>()

const duration = computed(() =>
  getGroupOrProjectDuration(props.project.userDuration)
)
</script>

<template>
  <div>
    {{ `${project.name} (${duration})` }}
  </div>
</template>
