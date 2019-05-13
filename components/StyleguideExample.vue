<style lang="scss" scoped>
.styleguide-example {
  background: transparentize($grey-light-color, 0.8);
  border-radius: $default-border-radius;
}
</style>

<template>
  <div class="styleguide-example with-border sml-pad-2 sml-push-y2 med-push-y4">
    <slot />
  </div> <!-- .styleguide-example -->
</template>
