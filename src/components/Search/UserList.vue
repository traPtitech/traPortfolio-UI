<script lang="ts" setup>
import UserListItem from './UserListItem.vue'
import { toRef } from 'vue'
import { useUserSearch } from './UsersSearch'

interface Props {
  query: string
}
const props = defineProps<Props>()

const queryRef = toRef(props, 'query')

const { User: filteredUsers, isLoading, error } = useUserSearch(queryRef)
</script>

<template>
  <div :class="$style.container">
    <div v-if="isLoading">ローディング中...</div>
    <div v-else-if="error">データの取得に失敗しました</div>
    <ul
      v-else-if="filteredUsers.length > 0"
      :class="$style.list"
    >
      <user-list-item
        v-for="member in filteredUsers"
        :key="member.id"
        :member="member"
      />
    </ul>
    <div v-else>該当するユーザーは見つかりませんでした</div>
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
