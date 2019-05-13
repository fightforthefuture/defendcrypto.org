<template>
  <StyleguideLayout>
    <h1>Welcome to the styleguide! &#x1F604;</h1>
  </StyleguideLayout>
</template>

<script>
import StyleguideLayout from '~/components/StyleguideLayout'

export default {
  components: {
    StyleguideLayout
  },

  head() {
    return {
      titleTemplate: '%s - Styleguide'
    }
  }
}
</script>
