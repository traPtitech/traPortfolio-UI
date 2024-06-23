<script lang="ts" setup>
import MemberListItem from './UserListItem.vue'
import { User } from '/@/lib/apis'

interface Props {
  members: User[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <ul :class="$style.container">
      <member-list-item
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </ul>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}
</style>
