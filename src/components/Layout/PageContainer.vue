<template>
  <main :class="$style.container"><slot /></main>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
