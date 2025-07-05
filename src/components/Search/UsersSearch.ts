import { type Ref, ref } from 'vue'

import { User } from '/@/lib/apis'
import { useUserStore } from '/@/store/user'
import { searchListCaseInsensitive } from '/@/lib/search'

export const useUserSearch = (submittedQuery: Ref<string>) => {
    const allUsers = ref<User[]>([])
    const filteredUsers = ref<User[]>([])
    const search = ref(submittedQuery.value)
    const isLoading = ref(true)
    const error = ref<Error | null>(null)


    const fetchUsers = async () => {
        try{
            allUsers.value = await useUserStore().fetchUsers()
            isLoading.value = true
            error.value = null
            filteredUsers.value = await searchListCaseInsensitive(allUsers.value, search.value, v => v.name)
        }
        catch(err) {
            error.value = err as Error
        }
        finally {
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