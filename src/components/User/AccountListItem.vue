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
  <a
    :class="$style.link"
    :href="account.url"
    target="_blank"
    rel="noreferrer noopener"
  >
    <a-icon :name="services.get(account.type)?.icon ?? ''" :size="24" />
  </a>
</template>

<style lang="scss" module>
.link {
  color: $color-secondary-text;
  margin: 0 0.3rem;
  font-size: 5px;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
