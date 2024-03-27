<script lang="ts" setup>
import { User } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  hostname: User
}>()
</script>

<template>
  <div>
    <router-link :class="$style.link" :to="`/users/${hostname.id}`">
      <user-icon :class="$style.icon" :user-id="hostname.name" :size="128" />
      <div :class="$style.desc">
        <div :class="$style.name">{{ hostname.name }}</div>
        <!-- <div v-if="hostname.realName" :class="$style.realName">
          {{ hostname.realName }}
        </div> -->
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.link {
  display: flex;
  text-decoration: none;
}
.desc {
  word-break: break-all;
}
.icon {
  margin-right: 2rem;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
.realName {
  color: $color-text;
  font-size: 1.5rem;
}
</style>
