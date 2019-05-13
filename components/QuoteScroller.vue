<i18n src="~/locales/components/QuoteScroller.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss" scoped>
// Quotes
.quotes-wrapper {
  // NOTE: Magic numbers. Update them based on the height of the longest quote.
  min-height: 300px;

  @include respond-to(med) {
    min-height: 281px;
  }

  @include respond-to(lrg) {
    min-height: 217px;
  }
}

// Arrows
.arrow {
  display: flex;
  flex: 0 0 30px;
  height:   30px;
  width:    30px;
  background: $brand-color;
  color: $white;
  border-radius: 100%;
  cursor: pointer;

  @include respond-to(med) {
    flex: 0 0 50px;
    height:   50px;
    width:    50px;
  }
}
.arrow:hover,
.arrow:focus {
  background: $brand-dark-color;
}
.arrow img {
  width: 15px;
  height: auto;

  @include respond-to(med) {
    width: 25px;
  }
}
</style>

<template>
  <div class="quotes-wrapper flex-grid sml-flex-row flex-center text-center">
    <a class="arrow" @click.prevent="prev">
      <img src="~assets/images/arrow-left.svg"
           :alt="$t('global.common.previous')"
           class="grid-center">
    </a>
    <transition name="fade" mode="out-in">
      <div :key="`slide-${activeSlide}`" class="sml-pad-x1">
        <blockquote>{{ $t('quotes')[activeSlide].text }}</blockquote>
        <p class="text-brand">
          {{ $t('quotes')[activeSlide].source }}
        </p>
      </div>
    </transition>
    <a class="arrow" @click.prevent="next">
      <img src="~assets/images/arrow-right.svg"
           :alt="$t('global.common.next')"
           class="grid-center">
    </a>
  </div> <!-- .quotes-wrapper -->
</template>

<script>

export default {
  data() {
    return {
      activeSlide: 0
    }
  },

  methods: {
    next() {
      if (this.activeSlide < Object.keys(this.$t('quotes')).length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },

    prev() {
      if (this.activeSlide > 0) {
        this.activeSlide--
      } else {
        this.activeSlide = Object.keys(this.$t('quotes')).length - 1
      }
    }
  }
}
</script>
