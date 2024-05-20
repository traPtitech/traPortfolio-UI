<script lang="ts" setup>
import AdminListItem from './AdminListItem.vue'
import { User } from '/@/lib/apis'
import SectionTitle from '/@/components/Layout/SectionTitle.vue'

interface Props {
  admins: User[]
}

defineProps<Props>()
</script>

<template>
  <section :class="$style.section">
    <section-title>リーダー</section-title>
    <div :class="$style.container">
      <admin-list-item
        v-for="admin in admins"
        :key="admin.id"
        :admin="admin"
      />
    </div>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
