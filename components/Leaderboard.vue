<i18n src="~/locales/components/Leaderboard.yml"></i18n>

<style lang="scss" scoped>
img.arrow {
  margin-top: $gutter/2;
  height: $base-font-size;
}
</style>

<template>
  <div>
    <div class="fill-grey-darkest sml-pad-2 is-rounded-top">
      <h4 class="text-center">
        <strong class="text-brand">{{ $t('currently_pledged_amount') }}</strong>
        {{ $t('currently_pledged_text') }}
      </h4>
    </div> <!-- .pad -->
    <div class="fill-grey sml-pad-x2 sml-pad-y1 is-rounded-bottom">
      <div v-for="(currency, index) in $t('top_currencies')"
           :key="`top-currency-${index}`"
           class="sml-pad-y1 flex-grid"
           :class="{ 'with-border-bottom': index < totalNumCurrencies - 1 }">
        <div class="sml-flex-2 med-flex-1">
          <img :src="currency.logo" :alt="`${currency.name}-logo`" class="coin-logo" />
          {{ currency.name }} ({{ currency.code }})
        </div>
        <img src="~assets/images/arrow-right.svg"
             :alt="$t('arrow_alt')"
             class="arrow grid-center">
        <p class="text-right text-brand">
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
