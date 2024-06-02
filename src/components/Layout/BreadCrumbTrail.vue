<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AIcon from '/@/components/UI/AIcon.vue'

export interface Path {
  name: string
  link: string
}

defineProps<{
  paths: Path[]
}>()

const route = useRoute()
</script>

<template>
  <div :class="$style.container">
    <template v-for="(path, index) in paths" :key="path">
      <a-icon
        v-if="index !== 0"
        :class="$style.icon"
        name="mdi:chevron-right"
      />
      <router-link
        v-if="index !== paths.length - 1"
        :to="path.link"
        :class="$style.link"
        :aria-current="route.path === path.link ? 'page' : undefined"
      >
        {{ path.name }}
      </router-link>
      <span v-else :class="$style.currentPath">{{ path.name }}</span>
    </template>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.icon {
  display: flex;
  color: $color-text-secondary;
}

.link {
  text-decoration: none;
  color: $color-text-secondary;

  &:hover {
    text-decoration: underline;
  }
}
.currentPath {
  color: $color-primary;
}
</style>
