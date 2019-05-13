<i18n src="~/locales/components/ReadTheLetter.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<template>
  <div>
    <h2 class="text-center">{{ $t('title') }}</h2>
    <div class="sml-push-y2 med-push-y3" v-html="letterText"></div>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    letterText() {
      const letter = this.letter ? this.letter : this.$t('global.letter_text')
      return letter.split('\n\n').map(l => `<p>${l}</p>`).join('')
    }
  }
}
</script>
