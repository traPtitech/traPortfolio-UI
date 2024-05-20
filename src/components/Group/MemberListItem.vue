<script lang="ts" setup>
import { GroupMember} from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'
import { getGroupOrProjectDuration } from '/@/lib/date'

defineProps<{
  member: GroupMember
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/users/${member.id}`">
      <user-icon :class="$style.icon" :user-id="member.name" :size="32" />
      <p :class="$style.name">{{ member.name }}</p>
      <p :class="$style.duration">{{ getGroupOrProjectDuration(member.duration) }}</p>
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
