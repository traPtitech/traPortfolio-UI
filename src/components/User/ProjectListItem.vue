<template>
  <div>
    {{ project.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserProject } from '/@/lib/apis'

export default defineComponent({
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object as PropType<UserProject>,
      required: true
    }
  }
})
</script>

<style lang="scss" module></style>
