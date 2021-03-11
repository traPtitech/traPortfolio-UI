<template>
  <div :class="$style.title">traPでの所属</div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { UserGroup, UserProject } from '/@/lib/apis'

export default defineComponent({
  name: 'GroupsContainer',
  props: {
    groups: {
      type: Object as PropType<Array<UserGroup>>,
      default: []
    },
    projects: {
      type: Object as PropType<Array<UserProject>>,
      default: []
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
