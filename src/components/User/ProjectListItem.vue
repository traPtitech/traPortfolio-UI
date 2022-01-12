<template>
  <div :class="$style.durationContainer">
    <span>{{ project.name }}</span>
    <div>
      <duration-list-item v-for="d of duration" :key="d" :duration="d" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import DurationListItem from './DurationListItem.vue'
import { UserProject } from '/@/lib/apis'
import { getGroupOrProjectDurations } from '/@/lib/date'

export default defineComponent({
  name: 'ProjectListItem',
  components: { DurationListItem },
  props: {
    project: {
      type: Object as PropType<UserProject>,
      required: true
    }
  },
  setup(props) {
    const duration = computed(() =>
      getGroupOrProjectDurations(props.project.userDuration)
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
