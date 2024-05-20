<template>
  <main :class="$style.container">
    <div>パンくずリスト</div>
    <slot />
  </main>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 1rem;
}
</style>
