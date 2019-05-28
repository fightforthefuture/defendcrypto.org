<i18n src="~/locales/pages/index.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <DefaultLayout>
    <section class="sml-pad-y2 med-pad-y5 fill-grey-lightest">
      <div class="wrapper with-overflow">
        <img src="~assets/images/kin-logo.svg"
             :alt="$t('global.common.logo_kin_alt')"
             class="grid-center kin-logo-sm">
        <h1 class="text-center sml-push-y4">
          {{ $t('page_title') }}
        </h1>
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center sml-push-y4">
            <div v-html="$t('intro_html')"></div>
          </div> <!-- .c -->
        </div> <!-- .row -->
        <div class="row">
          <div class="sml-c12 med-c8 lrg-c5 grid-center">
            <Cryptocurrencies class="sml-push-y2 med-push-y4 lrg-push-y6" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="leaderboard" class="sml-pad-y4 med-pad-y6 fill-dark-blue fill-triangle-top">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <Leaderboard />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section class="sml-pad-y4 med-pad-y6 fill-grey-lightest">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 id="what">{{ $t('what_title') }}</h2>
            <div class="sml-push-y2" v-html="$t('what_html')"></div>

            <h2 id="why" class="sml-push-y3 med-push-y4">
              {{ $t('why_title') }}
            </h2>
            <div class="sml-push-y2" v-html="$t('why_html')"></div>

            <h2 id="action" class="sml-push-y3 med-push-y4">
              {{ $t('action_title') }}
            </h2>
            <div class="sml-push-y2" v-html="$t('action_html')"></div>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="logocloud" class="sml-pad-y4 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>{{ $t('logos_title') }}</h2>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
      <div class="row sml-push-y2 med-push-y4">
        <div class="sml-c11 med-c10 grid-center">
          <LogoCloud />
        </div> <!-- .c -->
      </div> <!-- row -->
    </section> <!-- logos -->

    <section id="contribute" class="sml-pad-y-top3 sml-pad-y4 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center"> {{ $t('contribute_title') }}</h2>
            <p class="sml-push-y2 med-push-y3">
              {{ $t('contribute_description') }}
            </p>
            <ActionNetworkForm />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="how" class="sml-pad-y4 med-pad-y6 fill-dark-blue">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center text-success">{{ $t('how_title') }}</h2>
            <div class="sml-push-y2 med-push-y3 text-grey-light">
              <div v-html="$t('how_description_html')"></div>
            </div>
          </div> <!-- .c -->
          <Timeline />
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section class="sml-pad-y4 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 id="faqs" class="text-center">{{ $t('faqs.title') }}</h2>

            <div v-for="(faq, index) in $t('faqs.items')"
                 :key="`faq-${index}`"
                 class="sml-push-y2 med-push-y4">
              <p><strong>{{ faq.question }}</strong></p>
              <p class="sml-push-y1">{{ faq. answer }}</p>
            </div>

            <h2 id="resources" class="text-center sml-push-y4 med-push-y6">
              {{ $t('resources.title') }}
            </h2>

            <p v-for="(resource, index) in $t('resources.links')"
               :key="`resource-${index}`"
               class="sml-push-y2">
              <a :href="resource.link_url" target="_blank">{{ resource.title }}</a>
            </p>
            <p v-html="$t('press_contact_html', { email: $t('global.contact.email') })"></p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </DefaultLayout>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'
import DefaultLayout from '~/components/DefaultLayout'
import ActionNetworkForm from '~/components/ActionNetworkForm'
import LogoCloud from '~/components/LogoCloud'
import Cryptocurrencies from '~/components/Cryptocurrencies'
import Leaderboard from '~/components/Leaderboard'
import Timeline from '~/components/Timeline'

export default {
  components: {
    DefaultLayout,
    ActionNetworkForm,
    Cryptocurrencies,
    Leaderboard,
    LogoCloud,
    Timeline
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
