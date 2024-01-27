<script lang="ts" setup>
import AccountListItem from './AccountListItem.vue'
import { Account } from '/@/lib/apis'

interface Props {
  accounts: Account[]
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.accounts">
    <account-list-item
      v-for="account in accounts"
      :key="account.id"
      :account="account"
    />
  </div>
</template>

<style lang="scss" module>
.accounts {
  display: flex;
}
</style>
