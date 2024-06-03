<script lang="ts" setup>
import { computed } from 'vue'
import { Duration, YearWithSemesterDuration } from '/@/lib/apis'

interface Item {
  id: string
  name: string
  duration: Duration | YearWithSemesterDuration
}

interface Props {
  items: Item[]
  path: string
}

const props = defineProps<Props>()

// TODO: ソートのロジックをちゃんと書く
const sortedList = computed(() => {
  if (!props.items) return []
  const li = props.items
  li.sort((a, b) => {
    if (
      typeof a.duration.since === 'string' &&
      typeof b.duration.since === 'string'
    ) {
      if (a.duration.since > b.duration.since) {
        return -1
      } else {
        return 1
      }
    } else if (
      typeof a.duration.since === 'object' &&
      typeof b.duration.since === 'object'
    ) {
      if (a.duration.since.year > b.duration.since.year) {
        return -1
      } else if (a.duration.since.year < b.duration.since.year) {
        return 1
      } else {
        if (a.duration.since.semester > b.duration.since.semester) {
          return -1
        } else {
          return 1
        }
      }
    } else {
      return 0
    }
  })
  return li.slice(0, 5)
})
</script>

<template>
  <div :class="$style.container">
    <router-link
      v-for="item in sortedList"
      :key="item.id"
      :to="`/${path}/${item.id}`"
      :class="$style.link"
    >
      <span :class="$style.name">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 3.5rem;

  @media (width <= 768px) {
    gap: 0.5rem;
  }
}
.link {
  color: $color-text;
  text-decoration: none;
}
.name {
  font-size: 1.5rem;

  @media (width <= 768px) {
    font-size: 1rem;
  }
}
</style>
