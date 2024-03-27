<script lang="ts" setup>
import AccountList from './AccountList.vue'
import { UserDetail } from '/@/lib/apis'
import UserIcon from '/@/components/UI/UserIcon.vue'

defineProps<{
  userDetail: UserDetail
}>()
</script>

<template>
  <div>
    <user-icon :class="$style.icon" :user-id="userDetail.name" :size="128" />
    <div>
      <div :class="$style.nameContainer">
        <div :class="$style.name">{{ userDetail.name }}</div>
        <!-- <div :class="$style.realName">
          {{ userDetail.realName }}
        </div> -->
      </div>
      <account-list
        v-if="userDetail"
        :accounts="userDetail.accounts"
        :class="$style.accounts"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.icon {
  margin-right: 2rem;
}

.name {
  word-break: break-all;
  color: $color-primary;
  font-size: 3rem;
  margin-right: 2rem;
}

.realName {
  color: $color-text;
  font-size: 1.5rem;
  margin-right: 2rem;
}

.accounts {
  margin-top: 1rem;
}

.nameContainer {
  display: flex;
  align-items: center;
}
</style>
