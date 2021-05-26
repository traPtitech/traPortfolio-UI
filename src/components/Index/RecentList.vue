<template>
  <section>
    <section-title :class="$style.title">
      <span :class="$style.prefixTitle">最近の</span>
      <span>{{ title }}</span>
    </section-title>
    <div>
      <router-link
        v-for="item in items.slice(0, 5)"
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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Contest, Project, Event } from '/@/lib/apis'
import SectionTitle from '../Layout/SectionTitle.vue'

export default defineComponent({
  name: 'RecentList',
  components: {
    SectionTitle
  },
  props: {
    items: {
      type: Array as PropType<Contest[] | Project[] | Event[]>,
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
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
.prefix-title {
  font-size: 1.15rem;
}
.more-read {
  display: block;
  margin: 1rem 1rem;
  text-decoration: none;
  text-align: right;
}
</style>
