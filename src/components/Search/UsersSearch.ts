import { type Ref, ref, computed } from 'vue'

import { User } from '/@/lib/apis'
import { useUserStore } from '/@/store/user'
import { searchListCaseInsensitive } from '/@/lib/search'

export const useUserSearch = (submittedQuery: Ref<string>) => {
  const allUsers = ref<User[]>([])
  const filteredUsers = ref<User[]>([])
  const searchQueries = computed(() => submittedQuery.value.split(/\s+/))
  const isLoading = ref(true)
  const error = ref<Error | null>(null)

  const fetchUsers = async () => {
    try {
      isLoading.value = true
      allUsers.value = await useUserStore().fetchUsers()
      error.value = null
      filteredUsers.value = searchListCaseInsensitive(
        allUsers.value,
        searchQueries.value,
        v => v.name
      )
    } catch (err) {
      error.value = err as Error
    } finally {
      isLoading.value = false
    }
  }

  fetchUsers()

  return {
    User: filteredUsers,
    isLoading,
    error,
    refetch: fetchUsers
  }
}
