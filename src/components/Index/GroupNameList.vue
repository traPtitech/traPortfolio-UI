<script lang="ts" setup>
import SectionTitle from '/@/components/Layout/SectionTitle.vue'
import { Group } from '/@/lib/apis'

interface Props {
  groups: Group[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <section-title :class="$style.title">班一覧</section-title>
    <div :class="$style.container">
      <router-link
        v-for="group in groups"
        :key="group.id"
        :to="`/groups/${group.id}`"
        :class="$style.link"
      >
        <span :class="$style.name">{{ group.name }}</span>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" module>
.container {
  text-align: center;
}
.link {
  display: inline-block;
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
</style>
