<script lang="ts" setup>
import PageHeader from '/@/components/Layout/PageHeader.vue'
import LoadingPage from '/@/pages/LoadingPage.vue'
import PageFooter from '/@/components/Layout/PageFooter.vue'
</script>

<template>
  <page-header />
  <Suspense>
    <template #default>
      <router-view :class="$style.main" />
    </template>
    <template #fallback>
      <loading-page />
    </template>
  </Suspense>
  <page-footer />
</template>

<style lang="scss" module>
.main {
  flex: 1;
  padding-bottom: 1rem;
}
</style>
