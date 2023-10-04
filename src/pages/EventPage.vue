<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import HostnameList from '../components/Event/HostnameList.vue'
import { computed, ref, watchEffect } from 'vue'
import useParam from '/@/use/param'
import apis, { EventDetail } from '/@/lib/apis'
import { getDisplayDuration } from '/@/lib/date'

const eventId = useParam('eventId')
const eventDetail = ref<EventDetail>()
watchEffect(async () => {
  const res = await apis.getEvent(eventId.value)
  eventDetail.value = res.data
})

const name = computed(() => eventDetail.value?.name ?? 'Loading... イベント')
const hostnames = computed(() => eventDetail.value?.hostname)
const date = computed(() =>
  eventDetail.value ? getDisplayDuration(eventDetail.value?.duration) : ''
)
const place = computed(() => eventDetail.value?.place)
const description = computed(() => eventDetail.value?.description)
</script>

<template>
  <page-container>
    <page-title :class="$style.title">{{ name }}</page-title>
    <div :class="$style.infoContainer">
      <p :class="$style.detail">{{ date }}</p>
      <p :class="$style.detail">{{ place }}</p>
      <p :class="$style.description">{{ description }}</p>
    </div>
    <hostname-list v-if="hostnames !== undefined" :hostnames="hostnames" />
  </page-container>
</template>

<style lang="scss" module>
.title {
  margin-top: 4rem;
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
.description {
  color: $color-text;
  font-size: 1rem;
}
</style>
