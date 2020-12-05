<template>
  <page-header />
  <router-view :class="$style.main" />
  <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '/@/components/Layout/PageHeader.vue'
import PageFooter from '/@/components/Layout/PageFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
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
