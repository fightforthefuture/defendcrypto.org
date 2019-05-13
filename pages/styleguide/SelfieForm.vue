<template>
  <StyleguideLayout :component-name="title">
    <StyleguideExample>
      <h2 class="text-center">Take a photo</h2>

      <SelfieForm />

      <p class="text-center sml-push-y2 med-push-y3">
        <nuxt-link :to="localePath('gallery')">
          View the gallery
        </nuxt-link>
      </p>
    </StyleguideExample>
  </StyleguideLayout>
</template>

<script>
import StyleguideLayout from '~/components/StyleguideLayout'
import StyleguideExample from '~/components/StyleguideExample'
import SelfieForm from '~/components/SelfieForm'

export default {
  components: {
    StyleguideLayout,
    StyleguideExample,
    SelfieForm
  },

  computed: {
    title() { return 'SelfieForm' }
  }
}
</script>
