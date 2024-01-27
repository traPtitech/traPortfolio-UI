<script lang="ts" setup>
import BelongsList from './BelongsList.vue'
import { UserGroup, UserProject } from '/@/lib/apis'

interface Props {
  groups: UserGroup[]
  projects: UserProject[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <div :class="$style.title">traPでの所属</div>
    <belongs-list :groups="groups" :projects="projects" />
  </div>
</template>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
