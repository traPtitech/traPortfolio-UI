<script lang="ts" setup>
import AccountListItem from './AccountListItem.vue'
import { Account } from '/@/lib/apis'

const props = defineProps<{
  userName: string
  accounts: Account[]
}>()
</script>

<template>
  <ul :class="$style.accounts">
    <li>
      <a
        :href="`https://trap.jp/author/${props.userName}`"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="/@/assets/traP_logo_icon.svg" width="24" height="24" />
      </a>
    </li>
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
  list-style: none;
}
</style>
