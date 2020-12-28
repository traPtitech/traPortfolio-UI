<template>
  <div>
    <router-link :class="$style.link" :to="`/users/${hostname.name}`">
      <img :src="iconSrc" :class="$style.icon" />
      <div :class="$style.desc">
        <div :class="$style.name">{{ hostname.name }}</div>
        <div :class="$style.realName">ほんみょう</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { User } from '/@/lib/apis'

export default defineComponent({
  name: 'HostnameListItem',
  props: {
    hostname: {
      type: Object as PropType<User>,
      required: true
    }
  },
  setup() {
    const iconSrc = computed(
      () =>
        `https://q.trap.jp/api/v3/public/icon/${
          /*props.hostname.name*/ 'sappi_red'
        }`
    )
    return { iconSrc }
  }
})
</script>

<style lang="scss" module>
.link {
  display: flex;
  text-decoration: none;
}
.icon {
  height: 8rem;
  width: 8rem;
  margin-right: 2rem;
  border-radius: 50%;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
.realName {
  color: $color-text;
  font-size: 1.5rem;
}
</style>
