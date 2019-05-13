<i18n src="~/locales/pages/index.yml"></i18n>

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
        <h1 class="text-center">{{ $t('page_title') }}</h1>
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

    <section id="donate" class="sml-pad-y3 med-pad-y6 fill-grey-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('contribute_title') }}</h2>
            <h4 class="sml-push-y2 med-push-y3">
              {{ $t('contribute_description') }}
            </h4>
            <ActionNetworkForm />
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

export default {
  components: {
    DefaultLayout,
    ActionNetworkForm,
    Cryptocurrencies,
    Leaderboard
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
