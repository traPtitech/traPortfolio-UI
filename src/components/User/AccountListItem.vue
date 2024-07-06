<script lang="ts" setup>
import AIcon from '/@/components/UI/AIcon.vue'
import AtCoder from '/@/assets/AtCoder.png'
import { Account } from '/@/lib/apis'
import { services } from '/@/consts/services'

interface Props {
  account: Account
}

defineProps<Props>()
</script>

<template>
  <li>
    <a
      :class="$style.link"
      :href="account.url"
      target="_blank"
      rel="noreferrer noopener"
    >
      <a-icon
        v-if="services.get(account.type)?.icon !== 'atcoder'"
        :name="services.get(account.type)?.icon ?? ''"
        :size="24"
      />
      <img v-else :src="AtCoder" width="24px" height="24px" />
    </a>
  </li>
</template>

<style lang="scss" module>
.link {
  color: $color-secondary-text;
}
</style>
