<template>
  <div :class="$style.durationContainer">
    <div>{{ group.name }}</div>
    <div>
      <duration-list-item v-for="d of duration" :key="d" :duration="d" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import DurationListItem from './DurationListItem.vue'
import { UserGroup } from '/@/lib/apis'
import { getGroupOrProjectDurations } from '/@/lib/date'

export default defineComponent({
  name: 'GroupListItem',
  components: { DurationListItem },
  props: {
    group: {
      type: Object as PropType<UserGroup>,
      required: true
    }
  },
  setup(props) {
    const duration = computed(() =>
      getGroupOrProjectDurations(props.group.duration)
    )
    return { duration }
  }
})
</script>

<style lang="scss" module>
.durationContainer {
  display: flex;
}
</style>
