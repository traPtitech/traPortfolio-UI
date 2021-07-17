<template>
  <div>
    {{ group.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserGroup } from '/@/lib/apis'

export default defineComponent({
  name: 'GroupListItem',
  props: {
    group: {
      type: Object as PropType<UserGroup>,
      required: true
    }
  }
})
</script>

<style lang="scss" module></style>
