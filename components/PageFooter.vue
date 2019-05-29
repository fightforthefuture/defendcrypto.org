<i18n src="~/locales/components/PageFooter.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div class="page-footer">
    <div class="fill-grey-dark">
      <div class="wrapper">
        <div class="flex-grid sml-flex-col lrg-flex-row">
          <div class="kin-gradient sml-pad-y4 sml-pad-2 lrg-pad-x3 lrg-flex-4 text-center">
            <div class="kin-logo-block">
              <div class="flex-grid sml-flex-col lrg-flex-row">
                <p class="lrg-push-y2 lrg-flex-2">{{ $t('project_by') }}</p>
                <a href="https://www.kin.org" target="_blank">
                  <img src="~assets/images/kin-logo-white.svg"
                       :alt="$t('global.common.logo_kin_alt')"
                       class="sml-push-y-half img-inline">
                </a>
              </div>
            </div> <!-- .lrg-pull-right -->
          </div> <!-- .pad -->
          <div class="sml-pad-y4 sml-pad-2 lrg-pad-x3 lrg-flex-3 text-center">
            <p class="text-grey-med">{{ $t('collaboration_with') }}</p>
            <a href="https://www.fightforthefuture.org" target="_blank">
              <img src="~assets/images/fftf-logo.svg"
                   :alt="$t('global.common.logo_alt')"
                   class="fftf-logo img-inline">
            </a>
          </div> <!-- .pad -->
          <div class="sml-pad-y4 sml-pad-2 lrg-pad-x3 lrg-flex-3 coinbase-gradient text-center">
            <p class="text-grey-med">{{ $t('wallet_by') }}</p>
            <a href="https://www.coinbase.com/" target="_blank">
              <img src="~assets/images/coinbase-footer-logo.svg"
                   :alt="$t('coinbase_alt')"
                   class="img-inline">
            </a>
          </div> <!-- .pad -->
        </div> <!-- .flex-grid -->
      </div>
    </div> <!-- .fill -->
  </div> <!-- .page-footer -->
</template>
