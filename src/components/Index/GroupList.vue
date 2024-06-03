<script lang="ts" setup>
import { Group } from '/@/lib/apis'
import { computed } from 'vue'
import { useResponsiveStore } from '/@/store/responsive'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  groups: Group[]
}>()

const responsiveStore = useResponsiveStore()
const { isMobile } = storeToRefs(responsiveStore)

const logoSize = computed(() => (isMobile.value ? '64px' : '120px'))

const groups = computed(() =>
  props.groups.map(group => {
    switch (group.name) {
      case 'algorithm':
        return { ...group, logo: '/@/assets/algorithm_logo.svg' }
      case 'game':
        return { ...group, logo: '/@/assets/game_logo.svg' }
      case 'graphic':
        return { ...group, logo: '/@/assets/graphic_logo.svg' }
      case 'sound':
        return { ...group, logo: '/@/assets/sound_logo.svg' }
      case 'CTF':
        return { ...group, logo: '/@/assets/CTF_logo.svg' }
      case 'Kaggle':
        return { ...group, logo: '/@/assets/kaggle_logo.svg' }
      case 'SysAd':
        return { ...group, logo: '/@/assets/SysAd_logo.svg' }
      default:
        // mockでグループがまともに返ってこないため、一時的にSysAdを返している
        //throw new Error(`Invalid group: ${group.name}`)
        return { ...group, logo: '/@/assets/SysAd_logo.svg' }
    }
  })
)
</script>

<template>
  <div :class="$style.container">
    <router-link
      v-for="group in groups"
      :key="group.id"
      :to="`/groups/${group.id}`"
      :class="$style.link"
    >
      <img
        :src="group.logo"
        :alt="`${group.name}班のロゴ`"
        :height="logoSize"
        :width="logoSize"
      />
      <span :class="$style.name">{{ group.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  padding: 1rem 0;

  @media (width <= 768px) {
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem 0;
  }
}
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.name {
  font-size: 1.5rem;
  color: $color-text;

  @media (width <= 768px) {
    font-size: 1rem;
  }
}
</style>
