<script lang="ts" setup>
import { ProjectMember } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  member: ProjectMember
}>()
</script>

<template>
  <div>
    <router-link :class="$style.link" :to="`/users/${member.id}`">
      <user-icon :class="$style.icon" :user-id="member.name" :size="128" />
      <div :class="$style.desc">
        <div :class="$style.name">{{ member.name }}</div>
        <div :class="$style.realName">{{ member.realName }}</div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.link {
  display: flex;
  text-decoration: none;
}
.icon {
  margin-right: 2rem;
}
.name {
  word-break: break-all;
  color: $color-text;
  font-size: 3rem;
}
.realName {
  color: $color-text;
  font-size: 1.5rem;
}
</style>
