<script lang="ts" setup>
import { ProjectMember } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'
import { getGroupOrProjectDuration } from '/@/lib/date'

defineProps<{
  member: ProjectMember
}>()
</script>

<template>
  <li>
    <router-link
      :class="$style.link"
      :to="{ name: 'User', params: { userId: member.name } }"
    >
      <user-icon
        :class="$style.icon"
        :user-name="member.name"
        :size="32"
      />
      <span :class="$style.name">{{ member.name }}</span>
      <span :class="$style.duration">
        {{ getGroupOrProjectDuration(member.duration) }}
      </span>
    </router-link>
  </li>
</template>

<style lang="scss" module>
.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 1.25rem;
}
.duration {
  color: $color-text-secondary;
  font-size: 0.75rem;
}
</style>
