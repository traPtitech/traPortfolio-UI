<template>
  <section :class="$style.container">
    <section-title :class="$style.title">
      <span :class="$style.prefixTitle">最近の</span>
      <span>{{ title }}</span>
    </section-title>
    <div>
      <router-link
        v-for="item in listItem"
        :key="item.id"
        :to="`/${path}/${item.id}`"
        :class="$style.link"
      >
        <span :class="$style.name">{{ item.name }}</span>
      </router-link>
    </div>
    <router-link :to="`/${path}`" :class="$style.moreRead">
      <span :class="$style.name">もっと見る</span>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import SectionTitle from '/@/components/Layout/SectionTitle.vue'
import { computed } from 'vue'
import { Duration, YearWithSemesterDuration } from '/@/lib/apis'

interface Item {
  id: string
  name: string
  duration: Duration | YearWithSemesterDuration
}

interface Props {
  items: Item[]
  title: string
  path: string
}

const props = defineProps<Props>()

// TODO: ソートのロジックをちゃんと書く
const listItem = computed(() => {
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

<style lang="scss" module>
.link {
  display: block;
  margin: 0.5rem 1rem;
  text-decoration: none;
}
.name {
  font-size: 1.5rem;
  color: $color-text;
}
.title {
  color: $color-primary;
}
.prefixTitle {
  font-size: 1.15rem;
}
.moreRead {
  display: block;
  margin: 1rem 1rem;
  text-decoration: none;
  text-align: right;
  margin-top: auto;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
