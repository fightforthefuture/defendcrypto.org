<i18n src="~/locales/pages/index.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss" scoped>
.video-hero {
  position: relative;
  overflow: hidden;
}
.video-hero video {
  position: absolute;
  top: 0;
  width: 100%;
}
.video-hero .wrapper {
  position: relative; // to avoid strange video z-index behavior
}
</style>

<template>
  <DefaultLayout>
    <section class="video-hero sml-pad-y3 med-pad-y6 fill-black">
      <video autoplay loop muted class="fade-in"
             poster="/video-bg-poster.jpg">
        <source src="~assets/videos/video-bg.mp4" type="video/mp4" />
      </video>

      <div class="wrapper">
        <img src="~assets/images/kin-logo.svg"
             :alt="$t('global.common.logo_kin_alt')"
             class="grid-center">
        <h1 class="text-center sml-push-y2 med-push-y4">{{ $t('page_title') }}</h1>
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <div v-html="$t('intro_html')"></div>

            <Cryptocurrencies
              :currencies="currencies"
              class="sml-push-y2 med-push-y4" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="leaderboard" class="sml-push-y2 med-push-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <Leaderboard />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="what" class="sml-push-y3 med-push-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('what_title') }}</h2>
            <h4 class="sml-push-y2 med-push-y3">{{ $t('what_description') }}</h4>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="why" class="sml-push-y3 med-push-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('why_title') }}</h2>
            <h4 class="sml-push-y2 med-push-y3">{{ $t('why_description') }}</h4>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="action" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('action_title') }}</h2>
            <div class="sml-push-y2 med-push-y3" v-html="$t('action_html')"></div>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="partners" class="sml-pad-y3 med-pad-y6 fill-grey-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 id="partners" class="text-center">
              {{ $t('partners_title') }}
            </h2>
            <h4 class="sml-push-y2 med-push-y3">
              {{ $t('partners_description') }}
            </h4>
            <LogoCloud class="sml-push-y2 med-push-y3" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="contribute" class="sml-pad-y3 med-pad-y6 fill-grey-darkest">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 id="contribute" class="text-center">
              {{ $t('contribute_title') }}
            </h2>
            <h4 class="sml-push-y2 med-push-y3">
              {{ $t('contribute_description') }}
            </h4>
            <ActionNetworkForm />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="resources" class="sml-pad-y3 med-pad-y6 fill-grey-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('resources.title') }}</h2>

            <a v-for="(resource, index) in $t('resources.links')"
               :key="`resource-${index}`"
               class="sml-pad-2 sml-push-y2 with-border is-rounded"
               :href="resource.link_url"
               target="_blank">
              {{ resource.title }}
            </a>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="faqs" class="sml-pad-y3 med-pad-y6 fill-grey-darkest">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('faqs.title') }}</h2>

            <div v-for="(faq, index) in $t('faqs.items')"
                 :key="`faq-${index}`"
                 class="sml-pad-y2 with-border-bottom">
              <h4 class="text-brand">{{ faq.question }}</h4>
              <h4 class="sml-push-y1">{{ faq. answer }}</h4>
            </div>
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
import Cryptocurrencies from '~/components/Cryptocurrencies'
import Leaderboard from '~/components/Leaderboard'
import LogoCloud from '~/components/LogoCloud'

export default {
  components: {
    DefaultLayout,
    ActionNetworkForm,
    Cryptocurrencies,
    Leaderboard,
    LogoCloud
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t('page_title')}`
    }
  },

  async asyncData({ $axios }) {
    let currencies = []

    try {
      const { data } = await $axios.get(`https://data.battleforthenet.com/crypto/fftf.json`)
      currencies = data
    } catch (error) {
      //
    }

    return {
      currencies: currencies
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