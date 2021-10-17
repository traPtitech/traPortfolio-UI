import { useRoute, LocationQueryValue } from 'vue-router'
import { computed, ComputedRef } from 'vue'

const toStringIfArray = (
  s: LocationQueryValue | undefined | readonly LocationQueryValue[]
) => (Array.isArray(s) ? s[0] : s)

/**
 * @param queryName - 取得するquery、存在しない場合 undefined を返す
 */
const useQuery = (queryName: string): ComputedRef<string | undefined> => {
  const route = useRoute()
  return computed(() => toStringIfArray(route.query[queryName]))
}

export default useQuery
