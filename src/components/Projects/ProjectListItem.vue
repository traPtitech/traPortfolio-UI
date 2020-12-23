<template>
  <div>
    <router-link :class="$style.link" :to="`/projects/${project.id}`">
      <span :class="$style.name">{{ project.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '/@/lib/apis'

export default defineComponent({
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
.link {
  text-decoration: none;
}
.name {
  color: $color-text;
  font-size: 3rem;
}
</style>
