<template>
  <icon :name="iconName" :size="24" :class="$style.icon" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Icon from '../UI/Icon.vue'
import { Account, AccountType } from '/@/lib/apis'

export default defineComponent({
  name: 'AccountListItem',
  components: { Icon },
  props: {
    account: {
      type: Object as PropType<Account>,
      required: true
    }
  },
  setup(props) {
    const isIconify = computed(() => {
      return [
        AccountType.homepage,
        AccountType.blog,
        AccountType.twitter,
        AccountType.facebook,
        AccountType.github,
        AccountType.soundcloud
      ].includes(props.account.type)
    })
    const iconName = computed(() => {
      switch (props.account.type) {
        case AccountType.homepage:
          return 'mdi:home'
        case AccountType.blog:
          return 'mdi:document'
        case AccountType.twitter:
          return 'mdi:twitter'
        case AccountType.facebook:
          return 'mdi:facebook'
        case AccountType.pixiv:
          return 'mdi:twitter'
        case AccountType.github:
          return 'mdi:github'
        case AccountType.qiita:
          return 'mdi:twitter'
        case AccountType.atcoder:
          return 'mdi:twitter'
        case AccountType.soundcloud:
          return 'mdi:soundcloud'
      }
    })
    return { isIconify, iconName }
  }
})
</script>
<style lang="scss" module>
.icon {
  margin: 0 0.25rem;
  color: $color-secondary-text;
}
</style>
