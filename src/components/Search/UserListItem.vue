<script lang="ts" setup>
import { User } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  member: User
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/users/${member.id}`">
      <user-icon :class="$style.icon" :user-id="member.name" :size="32" />
      <p :class="$style.name">{{ member.name }}</p>
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
</style>
