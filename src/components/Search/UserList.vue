<script lang="ts" setup>
import { ref, watch } from 'vue'
import UserListItem from './UserListItem.vue'
import { User } from '/@/lib/apis'
import apis from '/@/lib/apis'

interface Props {
  query: string
}
const props = defineProps<Props>()
const members = ref<User[]>([])

const fetchUsers = async (query: string) => {
  const response = await apis.getUsers(undefined, query)
  members.value = response.data
  }
watch(() => props.query, fetchUsers, { immediate: true })
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
