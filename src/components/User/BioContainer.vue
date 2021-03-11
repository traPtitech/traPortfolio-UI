<template>
  <div :class="$style.title">自己紹介文</div>
  <p>{{ bio }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'BioContainer',
  props: {
    bio: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup() {}
})
</script>

<style lang="scss" module>
.title {
  color: $color-text;
  font-size: 2.25rem;
}
</style>
