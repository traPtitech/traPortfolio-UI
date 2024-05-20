<script lang="ts" setup>
import AccountListItem from './AccountListItem.vue'
import { Account } from '/@/lib/apis'

interface Props {
  accounts: Account[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$style.accounts">
    <account-list-item
      v-for="account in accounts"
      :key="account.id"
      :account="account"
    />
  </ul>
</template>

<style lang="scss" module>
.accounts {
  display: flex;
  gap: 0.5rem;
}
</style>
