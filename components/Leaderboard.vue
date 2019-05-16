<i18n src="~/locales/components/Leaderboard.yml"></i18n>

<style lang="scss" scoped>
.leaderboard {
  @include respond-to-max(sml) {
    text-align: center;
  }
}
.leaderboard img.arrow {
  flex: 0 0 38px;
  height: $base-font-size;
}
.leaderboard .coin-logo {
  @include respond-to-max(sml) {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }
}
.leaderboard .amount {
  @include respond-to(med) {
    text-align: right;
  }
}
</style>

<template>
  <div class="leaderboard">
    <div class="fill-grey-dark sml-pad-2 is-rounded-top">
      <h4 class="text-center">
        <strong class="text-brand">{{ $t('currently_pledged_amount') }}</strong>
        {{ $t('currently_pledged_text') }}
      </h4>
    </div> <!-- .pad -->
    <div class="fill-grey sml-pad-x2 sml-pad-y1 is-rounded-bottom">
      <div v-for="(currency, index) in $t('top_currencies')"
           :key="`top-currency-${index}`"
           class="sml-pad-y1 flex-grid sml-flex-col med-flex-row"
           :class="{ 'with-border-bottom': index < totalNumCurrencies - 1 }">
        <div class="sml-flex-2 med-flex-1">
          <div class="coin-logo">
            <img :src="currency.logo" :alt="`${currency.name}-logo`">
          </div>
          {{ currency.name }} ({{ currency.code }})
        </div>
        <img src="~assets/images/arrow-right.svg"
             :alt="$t('arrow_alt')"
             class="arrow sml-push-y-half sml-hide med-show">
        <p class="amount text-brand">
          {{ currency.amount }}
        </p>
      </div> <!-- v-for -->
    </div> <!-- .fill -->
  </div>
</template>

<script>
export default {
  computed: {
    currencies() {
      return this.$t('top_currencies')
    },
    totalNumCurrencies() {
      return Object.keys(this.currencies).length
    }
  }
}
</script>
