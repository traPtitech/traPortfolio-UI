<script lang="ts" setup>
import MemberListItem from './MemberListItem.vue'
import { GroupMember } from '/@/lib/apis'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'

interface Props {
  members: GroupMember[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <section-title>メンバー</section-title>
    <div :class="$style.container">
      <member-list-item
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </div>
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
}
</style>
