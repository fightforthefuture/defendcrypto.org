<i18n src="~/locales/components/Leaderboard.yml"></i18n>

<style lang="scss" scoped>
.leaderboard img.arrow {
  flex: 0 0 38px;
  height: 8px;
}
.leaderboard .coin-logo {
  @include respond-to-max(sml) {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }
}
.leaderboard .amount {
  color: $white;
}
.leaderboard .amount {
  @include respond-to(sml) {
    text-align: right;
  }
}
.leaderboard .amount {
  @include respond-to-max(sml) {
    position: relative;
    bottom: 25px;
  }
}

</style>

<template>
  <div class="leaderboard" v-show="currencies.length > 0">
    <div class="fill-blue-dark sml-pad-2 sml-pad-y6 is-rounded-top">
      <h2 class="text-center">
        <strong class="text-bold">{{ totalAmount }}</strong>
        {{ $t('currently_pledged_text') }}
      </h2>
    </div> <!-- .pad -->
    <div class="fill-blue-dark sml-pad-x2 sml-pad-y2 is-rounded-bottom">
      <div v-for="(currency, index) in currencies"
           :key="`top-currency-${index}`"
           class="sml-pad-y1 flex-grid sml-flex-col med-flex-row">
        <div class="sml-flex-2 med-flex-1">
          <div class="coin-logo">
            <img :src="currency.logo" :alt="`${currency.name}-logo`">
          </div>
          {{ currency.name }} ({{ currency.code }})
        </div>
        <img src="~assets/images/arrow-right.svg"
             :alt="$t('arrow_alt')"
             class="arrow sml-push-y-half sml-hide med-show">
        <p class="amount text-bold">
          {{ currency.amount }}
        </p>
      </div> <!-- v-for -->
    </div> <!-- .fill -->
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
