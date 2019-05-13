<i18n src="~/locales/components/PageFooter.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="page-footer">
    <div class="fill-grey-dark">
      <div class="flex-grid sml-flex-col lrg-flex-row">
        <div class="sml-pad-y4 sml-pad-2 lrg-pad-6 fill-grey">
          <div class="lrg-pull-right">
            <p>{{ $t('project_by') }}</p>
            <a href="https://www.kin.org" target="_blank">
              <img src="~assets/images/kin-logo.svg"
                   :alt="$t('global.common.logo_kin_alt')"
                   class="sml-push-y-half">
            </a>
          </div> <!-- .lrg-pull-right -->
        </div> <!-- .pad -->
        <div class="sml-pad-y4 sml-pad-2 lrg-pad-6">
          <p>{{ $t('collaboration_with') }}</p>
          <a href="https://www.fightforthefuture.org" target="_blank">
            <img src="~assets/images/fftf-logo.svg"
                 :alt="$t('global.common.logo_alt')"
                 class="sml-push-y-half lrg-push-y1">
          </a>
        </div> <!-- .pad -->
      </div> <!-- .flex-grid -->
    </div> <!-- .fill -->
    <div class="fill-grey-darkest sml-pad-y2">
      <div class="wrapper">
        <h4 v-html="$t('press_contact_html')"></h4>
      </div> <!-- .wrapper -->
    </div> <!-- .fill -->
  </div> <!-- .page-footer -->
</template>
