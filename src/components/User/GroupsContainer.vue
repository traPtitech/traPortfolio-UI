<script lang="ts" setup>
import { UserGroup } from '/@/lib/apis'
import GroupList from '/@/components/Groups/GroupList.vue'

interface Props {
  groups: UserGroup[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <h2 :class="$style.title">班</h2>
    <group-list :groups="groups" />
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.title {
  color: $color-text;
  font-size: 1rem;
}
</style>
