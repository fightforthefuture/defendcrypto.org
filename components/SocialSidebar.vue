<style lang="scss">
.social-sidebar {
  position: fixed;
  left: 0;
  top: 275px;
  z-index: 100;

  .btn {
    display: block;
    position: relative;
    height: 60px;
    width: 80px;
    padding: 0;
    margin-bottom: 10px;
    border-radius: 0 30px 30px 0;
    font-size: $base-font-size;
    text-transform: uppercase;
    transition: width 0.2s ease-in;

    span {
      display: block;
      position: absolute;
      right: 70px;
      width: 200px;
      line-height: 60px;
      opacity: 0;
      text-align: right;
      transition: opacity 0.4s ease-in;
    }

    img {
      position: absolute;
      right: 15px;
      top: 10px;
    }

    &:hover {
      width: 270px;

      span {
        opacity: 1.0;
      }
    }
  }
}
</style>

<template>
  <div class="social-sidebar sml-hide lrg-show">
    <ShareButton
      network="twitter"
      @click.native="$trackClick('twitter_share_button_sidebar')" />
    <ShareButton
      network="facebook"
      @click.native="$trackClick('facebook_share_button_sidebar')" />
  </div>
</template>

<script>
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    ShareButton
  }
}
</script>
