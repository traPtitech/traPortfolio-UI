<template>
  <h2 :class="$style.sectionTitle">
    <slot />
  </h2>
</template>

<style lang="scss" module>
.sectionTitle {
  color: $color-text;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
