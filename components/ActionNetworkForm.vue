<i18n src="~/locales/components/ActionNetworkForm.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="sml-push-y2 med-push-y3">
    <div>
      <div v-if="hasSigned">
        <h2 class="text-success text-center">{{ $t('thanks.title') }}</h2>
        <p class="sml-push-y1">{{ $t('thanks.share') }}</p>
        <div class="row sml-push-y2 med-push-y3">
          <div class="sml-c12 lrg-c6">
            <ShareButton
              network="twitter"
              class="btn-block"
              :text="tweetText"
              @click.native="$trackClick(`twitter_share_button_success_${routeName}`)">
              <span>{{ $t('global.common.tweet') }}</span>
            </ShareButton>
          </div> <!-- .c -->
          <div class="sml-c12 lrg-c6 sml-push-y1 lrg-push-y0">
            <ShareButton
              network="facebook"
              class="btn-block"
              @click.native="$trackClick(`facebook_share_button_sucess_${routeName}`)">
              <span>{{ $t('global.common.share') }}</span>
            </ShareButton>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- v-if -->
    </div> <!-- .push -->
    <form v-if="!hasSigned"
          @submit.prevent="submitForm()">
      <p v-if="errorMessage" class="text-warn">
        {{ errorMessage }}
      </p>
      <div class="flex-grid sml-flex-col med-flex-row">
        <input
            v-model="name"
            type="text"
            :placeholder="$t('form.name')"
            required>
        <input
            v-model="email"
            type="email"
            :placeholder="$t('form.email')"
            class="sml-push-y1 med-push-y0"
            required>
        <div v-if="hasCompany">
          <input
              v-model="companyName"
              type="text"
              class="sml-push-y1 med-push-y0"
              :placeholder="$t('form.company')">
        </div>
      </div> <!-- .flex-grid -->
      <div v-if="hasComment" class="sml-push-y1 textarea-with-btn">
        <textarea
          v-model="comment"
          ref="comment"
          :placeholder="$t('form.comment')">
        </textarea>
      </div> <!-- .textarea-with-btn -->

      <button class="btn btn-block btn-bright sml-push-y1" :disabled="isSending">
        <span v-if="isSending">{{ $t('global.common.sending') }}</span>
        <span v-else>{{ buttonText }}</span>
      </button>
      <p class="font-color-grey sml-push-y1 text-center">
        <small v-html="$t('privacy_html')"></small>
      </p>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sendToMothership, startTextFlow } from '~/assets/js/helpers'
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    ShareButton
  },

  props: {
    anPetitionId: {
      type: String,
      required: false,
      default: function () {
        return this.$t('petition_id')
      }
    },
    subject: {
      type: String,
      required: false,
      default: function () {
        return this.$t('subject')
      }
    },
    contactCongress: {
      type: Number,
      required: false,
      default: function () {
        return this.$t('contact_congress').toLowerCase() === 'yes' ? 1 : 0
      }
    },
    /* eslint-disable vue/require-prop-types */
    fccDocket: {
      required: false,
      default: function () {
        return this.$te('fcc_docket') ? this.$t('fcc_docket') : null
      }
    },
    callpowerId: {
      required: false,
      default: function () {
        return this.$te('callpower_id') ? this.$t('callpower_id') : null
      }
    },
    /* eslint-enable vue/require-prop-types */
    tags: {
      type: Object,
      required: false,
      default: function () {
        return this.$t('tags')
      }
    },
    textFlowId: {
      type: String,
      required: false,
      default: function () {
        return this.$t('text_flow_id')
      }
    },
    callScript: {
      type: String,
      required: false,
      default: function () {
        return this.$t('global.call_script')
      }
    },
    buttonText: {
      type: String,
      required: false,
      default: function () {
        return this.$t('form.button_cta')
      }
    },
    hasComment: {
      type: Boolean,
      required: false,
      default: true
    },
    hasCompany: {
      type: Boolean,
      required: false,
      default: true
    },
    tweetText: {
      type: String,
      required: false,
      default: null
    }
  },

  data() {
    return {
      isSending: false,
      hasSigned: false,
      errorMessage: null,
      comment: null,
      companyName: null
    }
  },

  computed: {
    ...mapState(['donateUrl']),

    routeName() { return this.$nuxt.$route.name },

    name: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('setName', value)
      }
    },

    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit('setEmail', value)
      }
    },

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
    },

    phone: {
      get() {
        return this.$store.state.phone
      },
      set(value) {
        this.$store.commit('setPhone', value)
      }
    }
  },

  methods: {
    async submitForm() {
      if (this.isSending) return

      this.isSending = true

      try {
        const response = await sendToMothership({ // eslint-disable-line no-unused-vars
          subject: this.subject,
          member: {
            first_name: this.name,
            email: this.email,
            phone_number: this.phone,
            street_address: this.address,
            postcode: this.zipCode,
            country: 'US',
            company: this.companyName
          },
          hp_enabled: 'true',
          guard: '',
          contact_congress: this.contactCongress,
          fcc_ecfs_docket: this.fccDocket,
          an_tags: JSON.stringify(Object.values(this.tags)),
          an_petition_id: this.anPetitionId,
          action_comment: this.hasComment ? this.comment : ''
        })

        this.$trackEvent(`petition_form_${this.routeName}`, 'submit')

        if (this.callpowerId) {
          this.$store.commit('setCallpowerCampaignId', this.callpowerId)
          this.$store.commit('setCallScript', this.callScript)
          this.$store.commit('setModalVisibility', true)
          this.$store.commit('setModalType', 'call-form')
        }
        this.isSending = false
        this.hasSigned = true

        if (this.phone) {
          // NOTE: no text flows for this campaign yet
          // this.startTextFlow()
        }
      } catch (err) {
        this.isSending = false
        this.errorMessage = this.$t('global.common.error')
      }
    },

    startTextFlow() {
      startTextFlow({
        opt_in_path: this.textFlowId,
        phone: this.phone,
        name: this.name,
        email: this.email,
        zip_code: this.zipCode,
        street: this.address
      })
    }
  }
}
</script>
