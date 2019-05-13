<i18n src="~/locales/pages/index.yml"></i18n>

<template>
  <DefaultLayout>
    <section class="sml-pad-y3 med-pad-y6 sml-pad-y-top1 fill-grey-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <div v-html="$t('intro_html')"></div>

            <ul class="hoz text-center sml-push-y3 med-push-y4">
              <li>
                <a @click.prevent="scrollTo('#donate')" class="btn">
                  {{ $t('scroll_down') }}
                </a>
              </li>
            </ul>

            <p class="sml-push-y1">
              <span class="text-brand">$ FIXME</span>
              {{ $t('currently_pledged') }}
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="what" class="sml-push-y3 med-push-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('what_title') }}</h2>
            <p class="sml-push-y2 med-push-y3">{{ $t('what_description') }}</p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="why" class="sml-push-y3 med-push-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('why_title') }}</h2>
            <p class="sml-push-y2 med-push-y3">{{ $t('why_description') }}</p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="action" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-grey text-center">{{ $t('action_title') }}</h2>
            <p class="sml-push-y2 med-push-y3" v-html="$t('action_html')"></p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="donate" class="sml-pad-y3 med-pad-y6 fill-grey-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <h2 class="text-center">{{ $t('contribute_title') }}</h2>
            <p class="sml-push-y2 med-push-y3">{{ $t('contribute_description') }}</p>
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

export default {
  components: {
    DefaultLayout,
    ActionNetworkForm
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
