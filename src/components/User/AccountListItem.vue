<template>
  <a :class="$style.link" :href="account.url">
    <icon v-if="isIcon" :name="iconName" :size="24" />
    <img v-else :src="iconName" :class="$style.icon" />
  </a>
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
    const isIcon = computed(() => {
      return ![AccountType.atcoder].includes(props.account.type)
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
          return 'simple-icons:pixiv'
        case AccountType.github:
          return 'mdi:github'
        case AccountType.qiita:
          return 'simple-icons:qiita'
        case AccountType.atcoder:
          return '/@/assets/AtCoder.svg'
        case AccountType.soundcloud:
          return 'mdi:soundcloud'
      }
    })
    return { isIcon, iconName }
  }
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
