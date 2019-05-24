<i18n src="~/locales/pages/terms.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <DefaultLayout>
    <section class="video-hero sml-pad-y2 med-pad-y4">
      <div class="wrapper with-overflow">
        <nuxt-link to="/"><img src="~assets/images/kin-logo.svg"
             :alt="$t('global.common.logo_kin_alt')"
             class="grid-center kin-logo-sm"></nuxt-link>
        <h1 class="text-center sml-push-y4">
          {{ $t('page_title') }}
        </h1>
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center sml-push-y4">
            <div v-html="$t('terms_html')" class="legal-copy"></div>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </DefaultLayout>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'
import DefaultLayout from '~/components/DefaultLayout'

export default {
  components: {
    DefaultLayout
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t('page_title')}`
    }
  },

  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      setTimeout(() => {
        location.hash = hash
      }, duration)
    }
  }
}
</script>
