<script lang="ts" setup>
import SearchInput from '/@/components/UI/SearchInput.vue'
</script>

<template>
  <header :class="$style.container">
    <router-link to="/">
      <img src="/@/assets/traP_logo_blue.svg" alt="traP" width="343" height="48" />
    </router-link>
    <search-input />
  </header>
</template>

<style lang="scss" module>
.container {
  display: flex;
  height: 5rem;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.1rem $color-secondary;
}
</style>
