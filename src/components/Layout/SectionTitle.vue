<template>
  <h2 :class="$style.sectionTitle"><slot /></h2>
</template>

<style lang="scss" module>
.sectionTitle {
  color: $color-text;
  font-size: 2.3rem;
  font-weight: normal;
}
</style>
