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
import Icon from '/@/components/UI/Icon.vue'
export default defineComponent({
  name: 'SearchInputLarge',
  components: {
    Icon
  },
  setup() {
    const input = ref('')
    const submit = () => {
      // TODO: 検索結果ページに飛ぶ #9 ID検索
      // https://github.com/traPtitech/traPortfolio-UI/issues/9
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
