<template>
  <div :class="$style.durationContainer">
    <span>{{ project.name }}</span>
    <span>
      <duration-list-item v-for="d of duration" :key="d" :duration="d"
    /></span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import DurationListItem from './DurationListItem.vue'
import { Semester, UserProject } from '/@/lib/apis'

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
    const duration = computed(() => {
      let ret: string[] = []
      for (let val of props.project.userDuration) {
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
