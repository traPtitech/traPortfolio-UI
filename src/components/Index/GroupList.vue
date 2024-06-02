<script lang="ts" setup>
import { Group } from '/@/lib/apis'
import algorithm from '/@/assets/algorithm_logo.svg'
import game from '/@/assets/game_logo.svg'
import graphic from '/@/assets/graphic_logo.svg'
import sound from '/@/assets/sound_logo.svg'
import ctf from '/@/assets/CTF.svg'
import sysad from '/@/assets/SysAd_logo.svg'
import { computed } from 'vue'

const props = defineProps<{
  groups: Group[]
}>()

const groups = computed(() =>
  props.groups.map(group => {
    switch (group.name) {
      case 'algorithm':
        return { ...group, logo: algorithm }
      case 'game':
        return { ...group, logo: game }
      case 'graphic':
        return { ...group, logo: graphic }
      case 'sound':
        return { ...group, logo: sound }
      case 'CTF':
        return { ...group, logo: ctf }
      case 'SysAd':
        return { ...group, logo: sysad }
      default:
        // mockでグループがまともに返ってこないため、一時的にSysAdを返している
        //throw new Error(`Invalid group: ${group.name}`)
        return { ...group, logo: sysad }
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
      <img :src="group.logo" :alt="group.name" height="120" width="120" />
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
}
.title {
  color: $color-primary;
}
</style>
