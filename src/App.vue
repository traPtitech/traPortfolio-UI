<script lang="ts" setup>
import PageHeader from '/@/components/Layout/PageHeader.vue'
import LoadingPage from '/@/pages/LoadingPage.vue'
import PageFooter from '/@/components/Layout/PageFooter.vue'
</script>

<template>
  <page-header />
  <router-view v-slot="{ Component }" :class="$style.main">
    <template v-if="Component">
      <suspense>
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <loading-page />
        </template>
      </suspense>
    </template>
  </router-view>
  <page-footer />
</template>

<style lang="scss" module>
.main {
  flex: 1;
  padding-bottom: 1rem;
}
</style>
