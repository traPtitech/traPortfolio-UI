<script lang="ts" setup>
import UserIcon from './UserIcon.vue'

defineProps<{
  userNames: string[]
}>()
</script>

<template>
  <div :class="$style.userIcons">
    <user-icon
      v-for="(userId, i) in userNames.slice(0, 3)"
      :key="userId"
      :user-name="userId"
      :class="$style.userIcon"
      :style="{ left: `${i * 16}px` }"
    />
    <span v-if="userNames.length > 3">+{{ userNames.length - 3 }}</span>
  </div>
</template>

<style lang="scss" module>
.userIcons {
  width: 80px;
  position: relative;
  text-align: right;
}
.userIcon {
  position: absolute;
}
</style>
