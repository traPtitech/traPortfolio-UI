<script lang="ts" setup>
import AIcon from '/@/components/UI/AIcon.vue'
import { Account } from '/@/lib/apis'
import { Service, services } from '/@/consts/services'
import { computed } from 'vue'
//import {AccountType} from '/@/lib/apis'

interface Props {
  account: Account
}

const props = defineProps<Props>()

const service = computed<Service | undefined>(() =>
  services.get(props.account.type)
)
</script>

<template>
  <li v-if="service !== undefined">
    <a
      :class="$style.link"
      :href="account.url"
      target="_blank"
      rel="noreferrer noopener"
      :title="
        account.type && account.displayName
          ? `${services.get(account.type)?.name} : ${account.displayName}`
          : undefined //account.display isn't defined.
      "
    >
      <img
        v-if="service.notIcon"
        :alt="service.name"
        :src="service.icon"
        width="24"
        height="24"
      />
      <a-icon
        v-else
        :name="service.icon ?? ''"
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
