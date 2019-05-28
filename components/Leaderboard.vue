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
  <div class="leaderboard" v-show="currencies.length > 0">
    <h2 class="text-center">
      <strong class="text-success">{{ totalAmount }}</strong>
      {{ $t('currently_pledged_text') }}
    </h2>
    <div class="sml-push-y2 med-push-y3">
      <div v-for="(currency, index) in currencies"
           :key="`top-currency-${index}`"
           class="sml-pad-y1 flex-grid sml-flex-row">
        <div class="sml-flex-3 med-flex-2">
          <p class="sml-pull-left sml-smaller-text tuck-bottom">
            #{{ index + 1 }}
          </p>
          <div class="coin-logo">
            <img :src="currency.logo" :alt="`${currency.name}-logo`">
          </div>
          <p class="sml-smaller-text">
            {{ currency.name }} ({{ currency.code }})
          </p>
        </div>
        <img src="~assets/images/arrow-right.svg"
             :alt="$t('arrow_alt')"
             class="arrow sml-push-y-half sml-hide med-show">
        <p class="amount sml-smaller-text text-right">
          {{ currency.amount }}
        </p>
      </div> <!-- v-for -->
    </div> <!-- .push -->
  </div>
</template>

<script>
function formatCurrency(value) {
  return '$' + value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,')
}

export default {
  data() {
    return {
      currencies: [],
      totalAmount: null
    }
  },

  computed: {
    totalNumCurrencies() {
      return Object.keys(this.currencies).length
    }
  },

  created() {
    this.fetchCurrencies()
  },

  methods: {
    async fetchCurrencies() {
      const { data } = await this.$axios.get('https://api.defendcrypto.org/leaderboard')

      for (const account of data.currencies) {
        this.currencies.push({
          name: account.name,
          code: account.code,
          logo: `/currencies/${account.name.toLowerCase().replace(/\s/g, '-')}.png`,
          amount: formatCurrency(account.usd_balance)
        })
      }

      this.totalAmount = formatCurrency(data.usd_total)
    }
  }
}
</script>
