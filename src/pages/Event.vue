<template>
  <page-container>
    <div :class="$style.titleContainer">
      <page-title>{{ name }}</page-title>
      <external-link :href="link" :class="$style.link">
        説明ページ
      </external-link>
    </div>
    <hostname-list :hostnames="hostnames" />
  </page-container>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import ExternalLink from '/@/components/UI/ExternalLink.vue'
import useParam from '/@/use/param'
import HostnameList from '../components/Event/HostnameList.vue'
import apis, { EventDetail } from '/@/lib/apis'

const getEvent = async (eventId: string): Promise<EventDetail> =>
  (await apis.getEvent(eventId)).data

export default defineComponent({
  name: 'Event',
  components: {
    PageContainer,
    PageTitle,
    ExternalLink,
    HostnameList
  },
  setup() {
    const eventId = useParam('eventId')
    const eventDetail = ref<EventDetail>()
    getEvent(eventId.value).then(response => (eventDetail.value = response))

    const name = computed(
      () => eventDetail.value?.name ?? 'Loading... イベント'
    )
    const link = 'https://trap.jp' // TODO
    const hostnames = computed(() => eventDetail.value?.hostname)

    return { name, link, hostnames }
  }
})
</script>

<style lang="scss" module>
.titleContainer {
  margin: 4rem 0;
}
.link {
  color: $color-secondary-text;
}
</style>
