<style lang="scss" scoped>
  img {
    height: 37px;
  /* filter: grayscale(100%);
    filter: brightness(0); */

    @include respond-to-max(med) {
      height: 17px;
    }
  }
  .logo-wrapper {
    max-width: 1380px;
    padding-left: 0;
    padding-right: 0;
  }
</style>

<template>
  <div>
    <div class="row">
      <div class="logo-wrapper">
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1 sml-push-y1 med-push-y0">
            <img src="~assets/images/circle-logo.png"
                 class="grid-center"
                 alt="Circle Logo">
          </div> <!-- .fill -->
        </div> <!-- .c -->
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1">
            <img src="~assets/images/coinbase-logo.png"
                 class="grid-center"
                 alt="Coinbase Logo">
          </div> <!-- .fill -->
        </div> <!-- .c -->
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1">
            <img src="~assets/images/messari-logo.png"
                 class="grid-center"
                 alt="Messari Logo">
          </div> <!-- .fill -->
        </div> <!-- .c -->
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1">
            <img src="~assets/images/shapeshift-logo.png"
                 class="grid-center"
                 alt="Shapeshift Logo">
          </div> <!-- .fill -->
        </div> <!-- .c -->
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1">
            <img src="~assets/images/kin-logo-color.png"
                 class="grid-center"
                 alt="Kin Logo">
          </div>
        </div>
        <div class="sml-c2 med-c2 sml-push-y1">
          <div class="fill-white is-rounded sml-pad-1">
            <img src="~assets/images/fftf-logo-dark.svg"
                 class="grid-center"
                 alt="Fight For The Future Logo">
          </div> <!-- .fill -->
        </div> <!-- .c -->
      </div> <!-- wrapper -->
    </div> <!-- .row -->
  </div>
</template>
