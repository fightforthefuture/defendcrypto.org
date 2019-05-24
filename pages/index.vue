<i18n src="~/locales/pages/index.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss" scoped>
.video-hero {
  position: relative;
  overflow: hidden;
  padding-bottom: $gutter*10;
  background: $grey-lightest-color;
  color: $black;
  padding-top: 80px;

  @include respond-to-max(med) {
    background-size: contain;
  }
}
.video-hero video {
  position: absolute;
  top: 0;
  width: 100%;
}
.video-hero .wrapper {
  position: relative; // to avoid strange video z-index behavior
}

#leaderboard {
  background: $dark-blue-color;
}
#what, #why, #action {
  background: $grey-lightest-color;
}

#how {
  background: $dark-blue-color;
  color: $white;
}
</style>

<template>
  <DefaultLayout>
    <section class="video-hero sml-pad-y2 med-pad-y4">
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

            <Cryptocurrencies class="sml-push-y2 med-push-y4 lrg-push-y6" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="leaderboard">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <Leaderboard />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="what" class="sml-pad-y6 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2>{{ $t('what_title') }}</h2>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
      <div class="sml-pad-y2">
        <div class="wrapper">
          <div class="row">
            <div class="sml-c12 lrg-c8 grid-center">
              <div v-html="$t('what_html')"></div>
            </div> <!-- .c -->
          </div> <!-- .row -->
        </div> <!-- .wrapper -->
      </div> <!-- -->
    </section>

    <section id="why">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2>{{ $t('why_title') }}</h2>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
      <div class="sml-push-y2">
        <div class="wrapper">
          <div class="row">
            <div class="sml-c12 lrg-c8 grid-center">
              <div v-html="$t('why_html')"></div>
            </div> <!-- .c -->
          </div> <!-- .row -->
        </div> <!-- .wrapper -->
      </div> <!-- -->
    </section>

    <section id="action" class="med-pad-y6 sml-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2>{{ $t('action_title') }}</h2>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
      <div class="sml-push-y2">
        <div class="wrapper">
          <div class="row">
            <div class="sml-c12 lrg-c8 grid-center">
              <div v-html="$t('action_html')"></div>
            </div> <!-- .c -->
          </div> <!-- .row -->
        </div> <!-- .wrapper -->
      </div> <!-- -->
    </section>

    <section id="contribute" class="sml-pad-y3">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center med-pad-y6">
            <h2 id="contribute" class="text-center">
              {{ $t('contribute_title') }}
            </h2>
            <p class="sml-push-y2 med-push-y3">
              {{ $t('contribute_description') }}
            </p>
            <ActionNetworkForm />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="how" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center med-pad-y6">
            <h2 class="text-center bold-color-text">
              {{ $t('how_title') }}
            </h2>
            <div class="sml-push-y2 med-push-y3 font-color-light-grey">
              <div v-html="$t('how_description_html')"></div>
            </div>
          </div> <!-- .c -->
          <Timeline />
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="faqs" class="sml-pad-y3">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('faqs.title') }}</h2>

            <div v-for="(faq, index) in $t('faqs.items')"
                 :key="`faq-${index}`"
                 class="sml-pad-y2">
              <p class="bold-text">{{ faq.question }}</p>
              <p class="sml-push-y1">{{ faq. answer }}</p>
            </div>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="resources" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('resources.title') }}</h2>

            <a v-for="(resource, index) in $t('resources.links')"
               :key="`resource-${index}`"
               class="sml-pad-2 sml-push-y2 is-rounded no-padding flex-grid sml-flex-row"
               :href="resource.link_url"
               target="_blank">
              <span>{{ resource.title }}</span>
            </a>
            <br>
            <p v-html="$t('press_contact_html')"></p>
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
import Timeline from '~/components/Timeline'

export default {
  components: {
    DefaultLayout,
    ActionNetworkForm,
    Cryptocurrencies,
    Leaderboard,
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
