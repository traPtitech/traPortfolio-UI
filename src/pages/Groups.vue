<template>
  <div>Groups</div>
  <ul v-if="fetcherState === 'loaded' && groups">
    <li v-for="group in groups" :key="group.id">{{ group.name }}</li>
  </ul>
  <p v-else>{{ fetcherState }}</p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '/@/store'
import useFetcher from '/@/use/fetcher'

export default defineComponent({
  name: 'Groups',
  setup() {
    const store = useStore()

    const groups = computed(() => store.state.groups)
    const { fetcherState } = useFetcher(groups, () =>
      store.dispatch.fetchGroups()
    )

    return { groups, fetcherState }
  }
})
</script>
