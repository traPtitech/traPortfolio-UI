<script lang="ts" setup>
import { computed } from 'vue'
import MemberListItem from './MemberListItem.vue'
import { ProjectMember } from '/@/lib/apis'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'

interface Props {
  members: ProjectMember[]
}

const props = defineProps<Props>()

const sortedMembers = computed(() => {
  if (!props.members) return []
  const li = props.members
  li.sort((a, b) => {
    if (a.duration.since.year !== b.duration.since.year) {
      return a.duration.since.year - b.duration.since.year
    } else {
      return a.duration.since.semester - b.duration.since.semester
    }
  })
  return li
})
</script>

<template>
  <section :class="$style.section">
    <section-title>プロジェクトメンバー</section-title>
    <ul :class="$style.container">
      <member-list-item
        v-for="member in sortedMembers"
        :key="member.id"
        :member="member"
      />
    </ul>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}
</style>
