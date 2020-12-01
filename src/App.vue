<template>
  <page-header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '/@/components/Layout/PageHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader
  }
})
</script>
