<i18n src="~/locales/components/PageFooter.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="page-footer text-center">
    <div class="sml-pad-y4">
      <div class="wrapper">
        <p>{{ $t('built_by') }}</p>
        <a href="https://www.fightforthefuture.org">
          <img src="~assets/images/fftf-logo.svg"
               :alt="$t('global.common.logo_alt')"
               class="grid-center sml-push-y-half">
        </a>
      </div> <!-- .wrapper -->
    </div> <!-- .pad -->
    <div class="contact-block sml-pad-y5 sml-push-y2">
      <div class="wrapper">
        <p class="tuck-bottom">{{ $t('for_press') }}</p>
        <p class="sml-push-y1 tuck-bottom">
          <small v-html="$t('press_contact_html')"></small>
        </p>
        <p>
          <small v-html="$t('other_contact_html')"></small>
        </p>
      </div> <!-- .wrapper -->
    </div> <!-- .contact-block -->
  </div> <!-- .page-footer -->
</template>
