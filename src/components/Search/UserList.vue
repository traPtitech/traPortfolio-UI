<script lang="ts" setup>
import UserListItem from './UserListItem.vue'
import apis from '/@/lib/apis'
import { ref, computed } from 'vue'
import { searchListCaseInsensitive } from '/@/lib/search'

interface Props {
  query: string
}
const props = defineProps<Props>()

const users = (await apis.getUsers(undefined, props.query)).data


const filtered = computed(() =>
  searchListCaseInsensitive(props.users, search.value, 'name')
)
const users1 = ref<User[]>(contestTeam.members)


</script>

<template>
  <div :class="$style.container">
    <ul :class="$style.list">


      <user-list-item
        v-for="member in users1"
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
