<template>
  <section :class="$style.container">
    <hostname-list-item
      v-for="hostname in hostnames"
      :key="hostname.id"
      :hostname="hostname"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { User } from '/@/lib/apis'
import HostnameListItem from './HostnameListItem.vue'

export default defineComponent({
  name: 'HostnameList',
  components: {
    HostnameListItem
  },
  props: {
    hostnames: {
      type: Array as PropType<User[]>,
      default: []
    }
  }
})
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
