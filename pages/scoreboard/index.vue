<i18n src="~/locales/pages/scoreboard.yml"></i18n>

<template>
  <DefaultLayout>
    <section id="sign" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h1>{{ $t('page_title') }}</h1>
            <Scoreboard class="sml-push-y2 med-push-y3" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout'
import Scoreboard from '~/components/Scoreboard'

export default {
  components: {
    DefaultLayout,
    Scoreboard
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t('page_title')}`
    }
  }
}
</script>
