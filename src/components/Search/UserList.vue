<script lang="ts" setup>
import UserListItem from './UserListItem.vue'
import { User } from '/@/lib/apis'

interface Props {
  members: User[]
}
defineProps<Props>()
</script>

<template>
  <div :class="$style.container">
    <ul :class="$style.list">
      <user-list-item
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </ul>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}
</style>
