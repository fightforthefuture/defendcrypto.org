<i18n src="~/locales/layouts/error.yml"></i18n>

<template>
  <DefaultLayout>
    <section class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h1 v-if="error.statusCode === 404">{{ $t('404_title') }}</h1>
            <h1 v-else>{{ error.statusCode }} - {{ error.message }}</h1>
            <p class="sml-push-y2 med-push-y3">
              {{ $t('return') }}
              <nuxt-link :to="localePath('index')">{{ $t('homepage') }}</nuxt-link>.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout'

export default {
  components: {
    DefaultLayout
  },

  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
