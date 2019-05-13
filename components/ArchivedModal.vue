<i18n src="~/locales/components/ArchivedModal.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="text-center">
    <!-- TODO: swap image with fftf-logo.svg if modal has a dark background -->
    <img src="~assets/images/fftf-logo-dark.svg" class="grid-center"
         :alt="$t('global.common.logo_alt')">

    <div class="sml-push-y2" v-html="$t('message_html')"></div>
  </div>
</template>
