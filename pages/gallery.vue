<i18n src="~/locales/pages/gallery.yml"></i18n>

<template>
  <GalleryLayout>
    <div class="site-content">
      <section class="sml-pad-y5">
        <div class="wrapper">
          <div class="sml-c12 grid-center text-center">
            <h1>{{ $t('page_title') }}</h1>
            <nuxt-link :to="localePath('index')" class="btn sml-push-y1 med-push-y2">
              <img src="/photo.svg" :alt="$t('camera_icon_alt')">
              {{ $t('photo_button_cta') }}
            </nuxt-link>
          </div> <!-- .c -->

          <SelfieGrid />
        </div> <!-- .wrapper -->
      </section>
    </div> <!-- .site-content -->
  </GalleryLayout>
</template>

<script>
import GalleryLayout from '~/components/GalleryLayout'
import SelfieGrid from '~/components/SelfieGrid'

export default {
  components: {
    GalleryLayout,
    SelfieGrid
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t('page_title')}`,
      bodyAttrs: {
        class: 'full-width'
      }
    }
  },

  async created() {
    if (this.$route.query.photo) {
      try {
        // TODO: make a generic endpoint or change per project
        const { data } = await this.$axios.get(`https://data.battleforthenet.com/deadline/selfies/${this.$route.query.photo}.json`)
        this.$store.dispatch('openSelfieModal', data)
      } catch (error) {
        // failed to load photo
      }
    }
  }
}
</script>
