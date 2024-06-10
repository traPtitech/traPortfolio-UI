<script setup lang="ts">
defineProps<{
  title: string
  description: string
  moreLink?: string
}>()
</script>

<template>
  <section :class="$style.section">
    <div :class="$style.headingContainer">
      <h2 :class="$style.h2">{{ title }}</h2>
      <p :class="$style.description">
        {{ description }}
      </p>
    </div>
    <div :class="$style.contentContainer">
      <slot />
      <div v-if="moreLink !== undefined" :class="$style.moreLinkContainer">
        <router-link :to="moreLink" :class="$style.moreLink">
          もっと見る
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 12rem;

  @media (width <= 768px) {
    gap: 1.25rem;
    padding: 0;
  }
}
.headingContainer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.h2 {
  font-size: 1.5rem;
  font-weight: medium;
  color: $color-primary;

  @media (width <= 768px) {
    font-size: 1.25rem;
  }
}
.description {
  margin-left: 0.5rem;
  font-size: 1.125rem;

  @media (width <= 768px) {
    font-size: 1rem;
  }
}
.contentContainer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 3.5rem;

  @media (width <= 768px) {
    padding: 0;
  }
}
.moreLinkContainer {
  display: flex;
  justify-content: flex-end;
}
.moreLink {
  font-size: 1.25rem;
  color: $color-primary;
  text-decoration: none;
}
</style>
