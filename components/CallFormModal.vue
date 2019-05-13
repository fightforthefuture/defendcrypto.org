<i18n src="~/locales/components/CallFormModal.yml"></i18n>

<template>
  <div>
    <h2>
      <span class="text-success">{{ $t('thanks' ) }}</span>
      {{ $t('please_call') }}
    </h2>
    <p class="sml-push-y1">{{ $t('instructions' ) }}</p>
    <p v-if="errorMessage" class="text-warn sml-push-y2">
      {{ errorMessage }}
    </p>
    <form class="flex-grid sml-flex-row sml-push-y2" @submit.prevent="submitForm()">
      <input v-model.trim="phone" class="phone sml-flex-2" type="tel"
             placeholder="Phone Number*" required>
      <input v-model.trim="zipCode" class="zip" type="tel"
             placeholder="ZIP Code*" required>
      <button class="btn" :disabled="isSending">
        <span v-if="isSending">{{ $t('sending' ) }}</span>
        <span v-else>{{ $t('call' ) }}</span>
      </button>
    </form>
    <p class="sml-push-y1 text-meta">
      <small v-html="$t('privacy_html')"></small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { postFormData } from '~/assets/js/helpers'

export default {
  data() {
    return {
      isSending: false,
      errorMessage: null
    }
  },

  computed: {
    ...mapState(['callpowerCampaignId']),

    phone: {
      get() {
        return this.$store.state.phone
      },
      set(value) {
        this.$store.commit('setPhone', value)
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
      this.isSending = true

      try {
        const { data } = await postFormData( // eslint-disable-line no-unused-vars
          'https://call-congress.fightforthefuture.org/create', {
            campaignId: this.callpowerCampaignId,
            userPhone: this.phone,
            userLocation: this.zipCode
          }
        )

        this.isSending = false
        this.$trackEvent(`call_form_${this.$nuxt.$route.name}`, 'submit')
        // Show call script in modal
        this.$store.commit('setModalType', 'call-script')
      } catch (err) {
        this.isSending = false
        this.errorMessage = this.$t('error')
      }
    }
  }
}
</script>
