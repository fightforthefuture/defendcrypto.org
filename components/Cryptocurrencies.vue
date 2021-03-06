<i18n src="~/locales/components/Cryptocurrencies.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss">
$mutliselect-height: 68px;

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
  background: $brand-color;
  color: $white;
  font-weight: $bold-font-weight;
  font-size: $m-font-size-4;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  border-radius: 4px;

  @include respond-to(med) {
    padding-right: 80px;
    padding-left: $gutter*2;
  }
  @include respond-to(lrg) {
    padding-top: 13px;
  }
}
.multiselect__tags .multiselect__placeholder {
  color: $white;
  padding-top: 4px;
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
  line-height: 2;
}

// Multi Select > Drop down options container
.multiselect__content-wrapper {
  height: 190px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
}

// Multi Select > Drop down options container > Options
.multiselect__option {
  font-size: $base-font-size;
  padding: 12px $gutter;
  border-bottom: 1px solid $grey-lighter-color;

  @include respond-to(med) {
    padding-left:  $gutter*2;
    padding-right: $gutter*2;
  }
}
.multiselect__option.multiselect__option--highlight {
  background: $brand-color;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: $brand-color; // NOTE: change to `$warn-color` if `:allow-empty="true"`
}
</style>

<template>
  <div class="currency-selector">
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
      :preselect-first="false"
      open-direction="bottom">
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

    <form class="sml-push-y2" v-if="selectedCurrency !== null">
      <div v-if="selectedCurrency.memo">
        <label>{{ $t('memo_label') }}</label>
        <ClickToCopy :text-to-copy="`${selectedCurrency.memo}`" />
      </div> <!-- v-if -->
      <div v-if="selectedCurrency.tag">
        <label>{{ $t('tag_label') }}</label>
        <ClickToCopy :text-to-copy="`${selectedCurrency.tag}`" />
      </div> <!-- v-if -->
      <label :class="{'sml-push-y-half': (selectedCurrency.memo || selectedCurrency.tag) }">
        {{ $t('address_label') }}
      </label>
      <ClickToCopy :text-to-copy="selectedCurrency.address" />

      <div v-if="selectedCurrency.note">
        <label class="text-brand">{{ selectedCurrency.note }}</label>
      </div>

      <h6 class="sml-push-y2">{{ $t('share_title') }}</h6>
      <ShareButton
        network="twitter"
        class="btn-sml btn-block sml-push-y1"
        :text="$t('share_tweet')"
        @click.native="$trackClick(`twitter_share_button_crypto_field`)">
        <span>{{ $t('global.common.tweet') }}</span>
      </ShareButton>
    </form>
  </div>
</template>

<script>
import ShareButton from '~/components/ShareButton'
import ClickToCopy from '~/components/ClickToCopy'

export default {
  components: {
    ShareButton,
    ClickToCopy
  },

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
