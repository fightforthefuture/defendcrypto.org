<i18n src="~/locales/pages/index.yml"></i18n>

<template>
  <DefaultLayout>
    <section class="sml-pad-y3 med-pad-y6 sml-pad-y-top2">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <p>{{ $t('intro') }}</p>

            <ul class="hoz text-center sml-push-y3 med-push-y4">
              <li>
                <a @click.prevent="scrollTo('#donate')" class="btn">
                  {{ $t('scroll_down') }}
                </a>
              </li>
            </ul>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="donate" class="sml-pad-y3 med-pad-y6 fill-grey-light">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>{{ $t('contribute_title') }}</h2>
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
