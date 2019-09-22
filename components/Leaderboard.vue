<i18n src="~/locales/components/Leaderboard.yml"></i18n>

<style lang="scss" scoped>
.leaderboard img.arrow {
  flex: 0 0 38px;
  height: 8px;
}
.sml-smaller-text {
  @include respond-to-max(sml) {
    margin-top: $gutter/2;
    font-size: $font-size-6;
  }
}
</style>

<template>
  <div class="leaderboard">
    <h2 class="text-center">
      <strong class="text-success">{{ <!-- totalAmount --> $1,654,781 | formatCurrency }}</strong>
      {{ $t('currently_pledged_text') }}
    </h2>
    
    <h3 class="text-center">
      The leaderboard section with donated amounts per asset is currently being updated as the funds have been moved into
      the control of Blockchain Association.  Please check back soon.
    </h3>
    
    <!-- <div class="sml-push-y2 med-push-y3">
      <div v-for="(currency, index) in currencies"
           :key="`top-currency-${index}`"
           class="sml-pad-y1 flex-grid sml-flex-row">
        <div class="sml-flex-3 med-flex-2">
          <p class="sml-pull-left sml-smaller-text tuck-bottom">
            #{{ index + 1 }}
          </p>
          <div class="coin-logo">
            <img :src="currencyLogo(currency)" :alt="`${currency.name}-logo`">
          </div>
          <p class="sml-smaller-text">
            {{ currency.name }} ({{ currency.code }})
          </p>
        </div>
        <img src="~assets/images/arrow-right.svg"
             :alt="$t('arrow_alt')"
             class="arrow sml-push-y-half sml-hide med-show">
        <p class="amount sml-smaller-text text-right">
          {{ currency.usd_balance | formatCurrency }}
        </p>
      </div> <!-- v-for -->
    </div> <!-- .push --> -->
  </div>
</template>

<script>
import leaderboard from '~/assets/data/leaderboard'

export default {
  computed: {
    currencies: () => leaderboard.currencies,
    totalAmount: () => leaderboard.usd_total
  },

  methods: {
    currencyLogo({ name }) {
      return `/currencies/${name.toLowerCase().replace(/\s/g, '-')}.png`
    }
  }
}
</script>
