<template>
  <div>
    <router-link :class="$style.link" :to="`/users/${userId}`">
      <img :class="$style.icon" :src="iconSrc" />
      <div>
        <div :class="$style.name">{{name}}<span :class="$style.realName">{{realName}}</span></div>
        <div>accounts</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent, watchEffect } from 'vue'
import apis, { UserDetail } from '../lib/apis'
import useParam from '../use/param'

export default defineComponent({
  name: 'User',
  props: {},
  setup() {
    const userId = useParam('userId')
    const userDetail = ref<UserDetail>()
    watchEffect(async () => {
      userDetail.value = (await apis.getUser(userId.value)).data
      console.log(userDetail.value)
    })
    const iconSrc = computed(
      () =>
        `https://q.trap.jp/api/v3/public/icon/${
          /*userDetail.value.name*/ 'sappi_red'
        }`
    )

    const name = computed(() => userDetail.value?.name)
    const realName = computed(() => userDetail.value?.realName)
    const bio = computed(() => userDetail.value?.bio)
    const accounts = computed(() => userDetail.value?.accounts)

    return { iconSrc, name, realName, bio, accounts, userId }
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
  word-break: break-all;
  color: $color-text;
  font-size: 3rem;
}

.realName {
  color: $color-text;
  font-size: 1.5rem;
}


</style>