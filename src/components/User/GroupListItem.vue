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
import { Semester, UserGroup } from '/@/lib/apis'

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
    const duration = computed(() => {
      let ret: string[] = []
      for (let val of props.group.duration) {
        let since = `${val.since.year}${
          val.since.semester == Semester.first ? '前期' : '後期'
        } ~ `
        if (val.until === undefined) {
          ret.push(since)
        } else {
          let until = `${val.until.year}${
            val.until.semester == Semester.first ? '前期' : '後期'
          }`
          ret.push(`${since} ${until}`)
        }
      }

      return ret
    })
    return { duration }
  }
})
</script>

<style lang="scss" module>
.durationContainer {
  display: flex;
}
</style>
