<i18n src="~/locales/components/ScoreboardForm.yml"></i18n>

<template>
  <form @submit.prevent="submitForm()">
    <p class="text-warn" v-if="errorMessage">{{ errorMessage }}</p>
    <div class="flex-grid sml-flex-row">
      <input type="text" v-model="address" :placeholder="$t('address')"
             class="sml-flex-2" required>
      <input type="tel" v-model="zipCode" :placeholder="$t('zip')" required>
    </div>
    <button class="btn btn-block sml-push-y1" :disabled="isSending">
      <span v-if="isSending">{{ $t('searching') }}</span>
      <span v-else>{{ $t('button_cta') }}</span>
    </button>
    <p class="sml-push-y1">
      <small>{{ $t('disclaimer') }}</small>
    </p>
  </form>
</template>

<script>
import { fetchRepScoreboard } from '~/assets/js/helpers'

export default {
  data() {
    return {
      isSending: false,
      errorMessage: null
    }
  },

  computed: {
    address: {
      get() {
        return this.$store.state.address
      },
      set(value) {
        this.$store.commit('setAddress', value)
      }
    },

    zipCode: {
      get() {
        return this.$store.state.zipCode
      },
      set(value) {
        this.$store.commit('setZipCode', value)
      }
    }
  },

  methods: {
    async submitForm() {
      this.$trackEvent('scoreboard_form', 'submit')
      this.isSending = true
      this.errorMessage = null

      try {
        const response = await fetchRepScoreboard({
          street: this.address,
          zip: this.zipCode
        })

        if (response) {
          this.$router.push({
            name: `scoreboard-id___${this.$i18n.locale}`,
            params: {
              id: response.bioguide_id
            }
          })
        }
      } catch (err) {
        this.errorMessage = this.$t('error')
      }

      this.isSending = false
    }
  }
}
</script>
