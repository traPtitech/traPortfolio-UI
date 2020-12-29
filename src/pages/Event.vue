<template>
  <page-container>
    <page-title :class="$style.title">{{ name }}</page-title>
    <div :class="$style.infoContainer">
      <p :class="$style.detail">{{ date }}</p>
      <p :class="$style.detail">{{ place }}</p>
      <p :class="$style.descirption">{{ descirption }}</p>
    </div>
    <hostname-list :hostnames="hostnames" />
  </page-container>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue'
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import useParam from '/@/use/param'
import HostnameList from '../components/Event/HostnameList.vue'
import apis, { EventDetail } from '/@/lib/apis'
import { getDisplayDuration } from '/@/lib/date'

const getEvent = async (eventId: string): Promise<EventDetail> =>
  (await apis.getEvent(eventId)).data

export default defineComponent({
  name: 'Event',
  components: {
    PageContainer,
    PageTitle,
    HostnameList
  },
  setup() {
    const eventId = useParam('eventId')
    const eventDetail = ref<EventDetail>()
    watchEffect(() => {
      getEvent(eventId.value).then(response => (eventDetail.value = response))
    })

    const name = computed(
      () => eventDetail.value?.name ?? 'Loading... イベント'
    )
    const hostnames = computed(() => eventDetail.value?.hostname)
    const date = computed(() =>
      eventDetail.value ? getDisplayDuration(eventDetail.value?.duration) : ''
    )
    const place = computed(() => eventDetail.value?.place)
    const descirption = computed(() => eventDetail.value?.descirption)

    return { name, hostnames, eventDetail, date, place, descirption }
  }
})
</script>

<style lang="scss" module>
.title {
  margin: 4rem 0;
}
.infoContainer {
  color: $color-text;
  margin-bottom: 4rem;
}
.detail {
  color: $color-text;
  font-size: 1.5rem;
  margin: 1rem 0;
}
.descirption {
  color: $color-text;
  font-size: 1rem;
}
</style>
