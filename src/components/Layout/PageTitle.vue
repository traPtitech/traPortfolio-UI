<template>
  <h1 :class="$style.title">
    <slot />
  </h1>
</template>

<style lang="scss" module>
.title {
  color: $color-primary;
  font-size: 2rem;
  font-weight: 500;
}
</style>
