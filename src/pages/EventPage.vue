<script lang="ts" setup>
import PageContainer from '/@/components/Layout/PageContainer.vue'
import PageTitle from '/@/components/Layout/PageTitle.vue'
import HostnameList from '/@/components/Event/HostnameList.vue'
import useParam from '/@/lib/param'
import apis from '/@/lib/apis'
import { getDisplayDuration } from '/@/lib/date'

const eventId = useParam('eventId')
const eventDetail = (await apis.getEvent(eventId.value)).data
</script>

<template>
  <page-container>
    <page-title :class="$style.title">{{ eventDetail.name }}</page-title>
    <div :class="$style.infoContainer">
      <p :class="$style.detail">
        {{ getDisplayDuration(eventDetail.duration) }}
      </p>
      <p :class="$style.detail">{{ eventDetail.place }}</p>
      <p :class="$style.description">{{ eventDetail.description }}</p>
    </div>
    <hostname-list :hostnames="eventDetail.hostname" />
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
../lib/param
