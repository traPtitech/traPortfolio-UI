<script lang="ts" setup>
import HostnameListItem from './HostnameListItem.vue'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'
import { User } from '/@/lib/apis'

interface Props {
  hostnames: User[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <section-title>主催者</section-title>
    <div :class="$style.container">
      <hostname-list-item
        v-for="hostname in hostnames"
        :key="hostname.id"
        :hostname="hostname"
      />
    </div>
  </section>
</template>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}
</style>
