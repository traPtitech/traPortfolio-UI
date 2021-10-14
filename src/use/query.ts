import { useRoute, LocationQueryValue } from 'vue-router'
import { computed, ComputedRef } from 'vue'

const toStringIfArray = (
  s: LocationQueryValue | undefined | readonly LocationQueryValue[]
) => (Array.isArray(s) ? s[0] : s)

/**
 * @param queryName - 取得するquery、存在しないものを取得しようとした場合、nullが返るので注意
 */
const useQuery = (queryName: string): ComputedRef<string> => {
  const route = useRoute()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return computed(() => toStringIfArray(route.query[queryName])!)
}

export default useQuery
