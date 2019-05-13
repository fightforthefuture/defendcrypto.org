<i18n src="~/locales/components/Cryptocurrencies.yml"></i18n>

<template>
  <div>
    <select v-model="selectedCurrency" class="sml-push-y1 med-push-y0">
      <option :value="null">
        {{ $t('choose_currency') }}
      </option>
      <option v-for="(c, index) in currencies" :key="`c-${index}`" :value="c.code">
        {{ c.name }} ({{ c.code }})
      </option>
    </select>

    <form class="sml-push-y1">
      <input
        type="text"
        class="text-input"
        :value="currentCurrency !== null ? currentCurrency.address : null"
        :disabled="currentCurrency === null"
        :placeholder="$t('choose_currency')" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    currencies: {
      type: Array,
      required: true,
      default: null
    }
  },

  data() {
    return {
      selectedCurrency: null
    }
  },

  computed: {
    currentCurrency() {
      if (this.selectedCurrency) {
        return this.currencies.find(o => o.code === this.selectedCurrency)
      } else {
        return null
      }
    }
  }
}
</script>
