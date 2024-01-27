<script lang="ts" setup>
import MemberListItem from './MemberListItem.vue'
import { User } from '/@/lib/apis'

interface Props {
  members: User[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.container">
    <member-list-item
      v-for="member in members"
      :key="member.id"
      :member="member"
    />
  </section>
</template>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
