<i18n src="~/locales/components/PageFooter.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="page-footer">
    <div class="fill-grey-dark">
      <div class="wrapper">
        <div class="flex-grid sml-flex-col lrg-flex-row">
          <div class="kin-gradient sml-pad-y4 sml-pad-2 lrg-pad-x3 lrg-flex-4">
            <div class="kin-logo-block">
              <div class="flex-grid sml-flex-col lrg-flex-row">
                <p class="lrg-push-y2 lrg-flex-2">{{ $t('project_by') }}</p>
                <a href="https://www.kin.org" target="_blank">
                  <img src="~assets/images/kin-logo.svg"
                       :alt="$t('global.common.logo_kin_alt')"
                       class="sml-push-y-half">
                </a>
              </div>
            </div> <!-- .lrg-pull-right -->
          </div> <!-- .pad -->
          <div class="sml-pad-y4 sml-pad-2 lrg-pad-x3 lrg-flex-3">
            <p class="text-grey-med">{{ $t('collaboration_with') }}</p>
            <a href="https://www.fightforthefuture.org" target="_blank">
              <img src="~assets/images/fftf-logo.svg"
                   :alt="$t('global.common.logo_alt')"
                   class="fftf-logo">
            </a>
          </div> <!-- .pad -->
        </div> <!-- .flex-grid -->
      </div>
    </div> <!-- .fill -->
    <div class="fill-grey-darkest sml-pad-y2">
      <div class="wrapper">
        <div class="sml-c12 lrg-c8 grid-center">
          <h4 v-html="$t('press_contact_html')"></h4>
        </div> <!-- .c -->
      </div> <!-- .wrapper -->
    </div> <!-- .fill -->
  </div> <!-- .page-footer -->
</template>
