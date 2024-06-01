<script lang="ts" setup>
import { User } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  admin: User
}>()
</script>

<template>
  <li>
    <router-link :class="$style.link" :to="`/users/${admin.id}`">
      <user-icon :class="$style.icon" :user-id="admin.name" :size="32" />
      <span :class="$style.name">{{ admin.name }}</span>
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
