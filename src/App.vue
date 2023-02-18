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

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '/@/components/Layout/PageHeader.vue'
import LoadingPage from '/@/pages/LoadingPage.vue'
import PageFooter from '/@/components/Layout/PageFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    LoadingPage,
    PageFooter
  }
})
</script>

<style lang="scss" module>
.main {
  flex: 1;
  padding-bottom: 1rem;
}
</style>
