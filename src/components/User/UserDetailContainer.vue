<script lang="ts" setup>
import AccountList from './AccountList.vue'
import { UserDetail } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  userDetail: UserDetail
}>()
</script>

<template>
  <div :class="$style.container">
    <user-icon :class="$style.icon" :user-name="userDetail.name" :size="64" />
    <div :class="$style.rightContainer">
      <div :class="$style.nameContainer">
        <div :class="$style.name">
          {{ userDetail.name }}
        </div>
        <!-- <div :class="$style.realName">
          {{ userDetail.realName }}
        </div> -->
      </div>
      <account-list
        v-if="userDetail"
        :accounts="userDetail.accounts"
        :user-name="userDetail.name"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.rightContainer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.nameContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.name {
  color: $color-primary;
  font-size: 2rem;
}
.realName {
  color: $color-text;
  font-size: 1.25rem;
}
</style>
