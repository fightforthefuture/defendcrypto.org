<i18n src="~/locales/components/Cryptocurrencies.yml"></i18n>

<style lang="scss">
$mutliselect-height: 68px;

// Inactive
.no-currency {
  opacity: 0;
}

// Multiselect > Chosen Selection area
.multiselect,
.multiselect__tags {
  min-height: $mutliselect-height;
  line-height: $base-line-height;
  font-size: $m-font-size-4;

  @include respond-to(lrg) {
    font-size: $font-size-4;
  }
}
.multiselect__tags {
  padding: 17px 60px 0 $gutter;
  background: $grey-light-color;
  border: 1px solid $grey-color;
  color: $white;

  @include respond-to(med) {
    padding-right: 80px;
    padding-left: $gutter*2;
  }
  @include respond-to(lrg) {
    padding-top: 13px;
  }
}
.multiselect__tags .multiselect__placeholder {
  padding-top: 0;
  color: $white;
}
.multiselect--active .multiselect__placeholder {
  display: inline;
}

// Multiselect > Chosen Selection area > Text containers
.multiselect__input,
.multiselect__single {
  background: transparent;
  font-size: $m-font-size-4;
  text-overflow: clip;
  white-space: nowrap;

  @include respond-to(lrg) {
    font-size: $font-size-4;
  }
}
.multiselect__single {
  padding-left: 0;
}
.multiselect__single .coin-logo {
  margin-top: 2px;

  @include respond-to(lrg) {
    margin-top: 4px;
  }
}

// Multselect > Drop down arrow
.multiselect__select {
  width: 60px;
  height: $mutliselect-height - 2;
  padding: $gutter $gutter*2;
  border-left: 1px solid $grey-color;

  @include respond-to(med) {
    width: 80px;
  }
}
.multiselect--active .multiselect__select {
  transform: rotateZ(0deg);
}
.multiselect__select:before {
  display: block;
  content: '';
  width: 20px;
  height: 11px;
  top: 50%;
  transform: translateY(-50%) rotateZ(0deg);
  margin: 0 auto;
  background: transparent url('~assets/images/arrow-down.svg') center center no-repeat;
  border: none;
  transition: transform 0.2s ease;
}
.multiselect--active .multiselect__select:before {
  transform: translateY(-50%) rotateZ(180deg);
}

// Multi Select > Containers with Coin Logo
.multiselect__single,
.multiselect__option {
  overflow: hidden;
  line-height: $base-line-height;
}

// Multi Select > Drop down options container
.multiselect__content-wrapper {
  height: 150px;
  border-color: $grey-color;
}

// Multi Select > Drop down options container > Options
.multiselect__option {
  font-size: $base-font-size;
  padding: 12px $gutter;

  @include respond-to(med) {
    padding-left:  $gutter*2;
    padding-right: $gutter*2;
  }
}
.multiselect__option.multiselect__option--highlight {
  background: $grey-light-color;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: $grey-light-color; // NOTE: change to `$warn-color` if `:allow-empty="true"`
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
      :searchable="false"
      :show-labels="false"
      :placeholder="$t('choose_currency')"
      label="name"
      track-by="name"
      :allow-empty="false"
      :preselect-first="false">
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

    <form class="sml-push-y1" :class="{'no-currency': selectedCurrency === null}">
      <input
        type="text"
        class="text-input input-inverted"
        :value="selectedCurrency !== null ? selectedCurrency.address : null"
        :disabled="selectedCurrency === null"
        :placeholder="$t('choose_currency')"
        readonly />
      <div class="text-brand sml-push-y-half"
           v-html="$t('copy_instructions_html')">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCurrency: null
    }
  },

  computed: {
    currencies() {
      const coins = []
      for (const coin in this.$t('coins')) {
        coins.push(this.$t('coins')[coin])
      }
      return coins
    }
  }
}
</script>
