<script lang="ts" setup>
import MemberListItem from './MemberListItem.vue'
import { ProjectMember } from '/@/lib/apis'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'

interface Props {
  members: ProjectMember[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <section-title>プロジェクトメンバー</section-title>
    <ul :class="$style.container">
      <member-list-item
        v-for="member in members"
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
