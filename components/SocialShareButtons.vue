<template>
  <div class="flex-grid sml-flex-row text-center">
    <ShareButton
      network="Twitter"
      :url="url"
      :text="tweetText"
      :should-display-icon="false"
      class="btn-sml btn-block"
      @click.native="$trackClick(`twitter_share_button_${routeName}`)" />
    <ShareButton
      network="Facebook"
      :url="url"
      :should-display-icon="false"
      class="btn-sml btn-block"
      @click.native="$trackClick(`facebook_share_button_${routeName}`)" />
  </div> <!-- .flex-grid -->
</template>

<script>
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    ShareButton
  },

  props: {
    url: {
      type: String,
      required: false,
      default: null
    },
    tweetText: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    routeName() { return this.$nuxt.$route.name }
  }
}
</script>
