<template>
  <footer :class="$style.container">
    <div :class="$style.copy">
      <img src="/@/assets/traP_logo_full_white.svg" :class="$style.logo" />
      <div :class="$style.copyright">© 2015- traP</div>
    </div>
  </footer>
</template>

<style lang="scss" module>
.container {
  display: flex;
  padding: 1.5rem 3rem;
  color: $color-background;
  background-color: $color-text;
  justify-content: end;
  @media (max-aspect-ratio: 1/2) {
    text-align: center;
  }
}
.copy {
  max-width: 20rem;
}
.logo {
  width: 100%;
}
.copyright {
  font-size: 0.8rem;
  text-align: center;
}
</style>
