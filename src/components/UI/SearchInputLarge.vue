<template>
  <div :class="$style.inputWrapper">
    <icon name="mdi:magnify" :size="36" :class="$style.icon" />
    <input
      v-model="input"
      type="text"
      placeholder="ユーザー検索"
      :class="$style.input"
      @keypress.prevent.enter.exact="submit"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '/@/components/UI/Icon.vue'

export default defineComponent({
  name: 'SearchInputLarge',
  components: {
    Icon
  },
  setup() {
    const router = useRouter()
    const input = ref('')
    const submit = () => {
      // 検索結果ページへ遷移
      router.push({ name: 'UserSearch', query: { q: input.value } })
    }
    return { input, submit }
  }
})
</script>

<style lang="scss" module>
.inputWrapper {
  display: flex;
  padding: 0.3rem;
  border: 2px solid $color-secondary;
  border-radius: 4px;
  align-items: center;
}
.input {
  font-size: 1.5rem;
  outline: none;
  width: 100%;
  height: 36px;
  line-height: 36px;
  color: $color-secondary-text;
}
.icon {
  margin: 0 0.3rem;
  color: $color-secondary-text;
}
</style>
