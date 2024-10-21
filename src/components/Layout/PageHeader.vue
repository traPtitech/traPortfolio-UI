<script lang="ts" setup>
import SearchInput from '/@/components/UI/SearchInput.vue'
import { useResponsiveStore } from '/@/store/responsive'
import { storeToRefs } from 'pinia'
import pcLogo from '/@/assets/traPortfolio_logo_full.svg'
import spLogo from '/@/assets/traPortfolio_logo_icon.svg'

const responsiveStore = useResponsiveStore()
const { isMobile } = storeToRefs(responsiveStore)
</script>

<template>
  <header :class="$style.container">
    <router-link :to="{ name: 'Index' }">
      <img
        :src="isMobile ? spLogo : pcLogo"
        alt="traP"
        :width="isMobile ? '48' : '224'"
        height="48"
      >
    </router-link>
    <search-input />
  </header>
</template>

<style lang="scss" module>
.container {
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.1rem $color-secondary;

  @media (width <= 768px) {
    padding: 0.5rem 1rem;
  }
}
</style>
