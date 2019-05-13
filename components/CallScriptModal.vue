<i18n src="~/locales/components/CallScriptModal.yml"></i18n>

<style lang="scss" scoped>
  .icon-call {
    max-height: $font-size-2*1.2;
  }
  .icon-warning {
    max-height: $base-font-size*$base-line-height;
  }
</style>

<template>
  <div>
    <div class="with-border-bottom">
      <h2>
        <img src="~/assets/images/call-icon.svg" alt="Phone icon"
             class="img-inline icon-call">
        {{ $t('calling_now') }}
      </h2>
      <p class="sml-push-y1">
        <strong>{{ $t('script_intro') }}</strong>
      </p>
      <p class="text-meta">
        {{ callScript }}
      </p>
      <div class="sml-pad-y2">
        <p>
          <img src="~/assets/images/warning-icon.svg" alt="!"
               class="img-inline icon-warning">
          {{ $t('if_busy') }}
        </p>
      </div> <!-- .pad -->
    </div> <!-- .with-border-bottom -->

    <h4 class="sml-push-y2">{{ $t('done_calling') }}</h4>
    <SocialShareButtons class="sml-push-y2" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    SocialShareButtons
  },

  computed: {
    ...mapState(['callScript'])
  }
}
</script>
