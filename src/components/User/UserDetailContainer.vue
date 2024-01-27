<script lang="ts" setup>
import AccountList from './AccountList.vue'
import { computed } from 'vue'
import { UserDetail } from '/@/lib/apis'

const props = defineProps<{
  userDetail: UserDetail
}>()

const iconSrc = computed(
  () => `https://q.trap.jp/api/v3/public/icon/${props.userDetail.name}`
)
</script>

<template>
  <div>
    <img :class="$style.icon" :src="iconSrc" />
    <div>
      <div :class="$style.nameContainer">
        <div :class="$style.name">{{ userDetail.name }}</div>
        <div :class="$style.realName">
          {{ userDetail.realName }}
        </div>
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
  height: 8rem;
  width: 8rem;
  margin-right: 2rem;
  border-radius: 50%;
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
