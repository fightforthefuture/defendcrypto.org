<i18n src="~/locales/components/Cryptocurrencies.yml"></i18n>

<style lang="scss">
.multiselect,
.multiselect__tags {
  min-height: 50px;
  line-height: $base-line-height;
  font-size: $base-font-size;
}
.multiselect__select {
  height: 48px;
}
.multiselect__single,
.multiselect__option {
  overflow: hidden;
  line-height: $base-line-height;
  font-size: $base-font-size;
}
.multiselect__content-wrapper {
  height: 150px;
}
</style>

<template>
  <div>
    <multiselect
      v-model="selectedCurrency"
      :options="currencies"
      :close-on-select="true"
      :clear-on-select="false"
      :hide-selected="false"
      :preserve-search="true"
      :show-labels="false"
      :placeholder="$t('choose_currency')"
      label="name"
      track-by="name"
      :preselect-first="false"
      id="example">
      <template slot="singleLabel" slot-scope="props">
        <div class="coin-logo">
          <img :src="props.option.logo" :alt="props.option.name">
        </div> <!-- .coin-logo -->
        {{ props.option.name }} ({{ props.option.code }})
      </template>
      <template slot="option" slot-scope="props">
        <div class="coin-logo">
          <img :src="props.option.logo" :alt="props.option.name">
        </div> <!-- .coin-logo -->
        {{ props.option.name }} ({{ props.option.code }})
      </template>
    </multiselect>

    <form class="sml-push-y1">
      <input
        type="text"
        class="text-input"
        :value="selectedCurrency !== null ? selectedCurrency.address : null"
        :disabled="selectedCurrency === null"
        :placeholder="$t('choose_currency')" />
    </form>
  </div>
</template>

<script>
import CRYPTOCURRENCIES from '~/assets/data/currencies.json'

export default {
  data() {
    return {
      selectedCurrency: null
    }
  },

  computed: {
    currencies() { return CRYPTOCURRENCIES }
  }
}
</script>
