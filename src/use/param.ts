import { useRoute } from 'vue-router'
import { computed, ComputedRef } from 'vue'

const toStringIfArray = (s: string | readonly string[]) =>
  Array.isArray(s) ? s[0] : s

const useParam = (paramName: string): ComputedRef<string> => {
  const route = useRoute()
  return computed(() => toStringIfArray(route.params[paramName]))
}

export default useParam
