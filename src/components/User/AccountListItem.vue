<template>
  <a :class="$style.link" :href="account.url">
    <icon v-if="icon.type === 'icon'" :name="icon.name" :size="24" />
    <img
      v-else-if="icon.type === 'img'"
      :src="icon.path"
      :class="$style.icon"
    />
  </a>
</template>

<script lang="ts" setup>
import Icon from '/@/components/UI/Icon.vue'

import { computed, ComputedRef } from 'vue'
import { Account, AccountType } from '/@/lib/apis'
import AtcoderImgPath from '/@/assets/AtCoder.svg'

interface Props {
  account: Account
}

const props = defineProps<Props>()

// TODO:
type IconType = { type: 'icon'; name: string }
type ImgType = { type: 'img'; path: string }
type IconOrImg = IconType | ImgType
const icon: ComputedRef<IconOrImg> = computed(() => {
  switch (props.account.type) {
    case AccountType.homepage:
      return { type: 'icon', name: 'mdi:home' }
    case AccountType.blog:
      return { type: 'icon', name: 'mdi:document' }
    case AccountType.twitter:
      return { type: 'icon', name: 'mdi:twitter' }
    case AccountType.facebook:
      return { type: 'icon', name: 'mdi:facebook' }
    case AccountType.pixiv:
      return { type: 'icon', name: 'simple-icons:pixiv' }
    case AccountType.github:
      return { type: 'icon', name: 'mdi:github' }
    case AccountType.qiita:
      return { type: 'icon', name: 'simple-icons:qiita' }
    case AccountType.atcoder:
      return { type: 'img', path: AtcoderImgPath }
    case AccountType.soundcloud:
      return { type: 'icon', name: 'mdi:soundcloud' }
  }
  return { type: 'icon', name: 'mdi:link' }
})
</script>
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
