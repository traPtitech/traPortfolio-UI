<script lang="ts" setup>
import AIcon from '/@/components/UI/AIcon.vue'
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
      <img
        v-if="services.get(account.type)?.notIcon"
        :src="services.get(account.type)?.icon"
        width="24px"
        height="24px"
      />
      <a-icon
        v-else
        :name="services.get(account.type)?.icon ?? ''"
        :size="24"
      />
    </a>
  </li>
</template>

<style lang="scss" module>
.link {
  color: $color-secondary-text;
}
</style>
