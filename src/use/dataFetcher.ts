import { ref, Ref } from 'vue'
import { FetcherState } from './fetcher'

const useDataFetcher = <T>(
  fetchFunc: () => Promise<T>
): { data: Ref<T | undefined>; fetcherState: Ref<FetcherState> } => {
  const state = ref<FetcherState>('loaded')
  const data = ref<T>()
  ;(async () => {
    state.value = 'loading'
    try {
      data.value = await fetchFunc()
      state.value = 'loaded'
    } catch (e) {
      state.value = 'error'

      // eslint-disable-next-line no-console
      console.error(e)
    }
  })()

  return { data: data, fetcherState: state }
}

export default useDataFetcher
