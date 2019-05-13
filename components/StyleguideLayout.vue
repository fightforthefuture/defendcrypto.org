<style lang="scss" scoped>
.page-header #menu {
  left: auto;
  width: 300px;
  max-width: 90%;
}
</style>

<template>
  <div>
    <header class="page-header">
      <div class="sml-c10 med-c8">
        <nuxt-link to="/styleguide">
          <h2>{{ title }} - Styleguide</h2>
        </nuxt-link>
      </div> <!-- .c -->
      <div class="sml-c2 med-c4 menu-wrapper">
        <label for="menu-toggle" id="menu-label">
          &#9776;
          <span class="text-accessibility">Menu</span>
        </label>
        <input type="checkbox" id="menu-toggle" />
        <div id="menu" class="sml-pad-2">
          <h2><nuxt-link to="/styleguide/base">Base</nuxt-link></h2>
          <ul>
            <li>
              <nuxt-link to="/styleguide/base#colors">Colors</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#grid">Grid</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#headings">Headings</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#typography">Typography</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#spacing">Spacing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#modifiers">Modifiers</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#buttons">Buttons</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#forms">Forms</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/base#lists">Lists</nuxt-link>
            </li>
          </ul>
          <h2 class="sml-push-y2">Components</h2>
          <ul>
            <li>
              <nuxt-link to="/styleguide/ActionNetworkForm">ActionNetworkForm</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/Logo">Logo</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/SocialShareButtons">SocialShareButtons</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/QuoteScroller">QuoteScroller</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/LogoCloud">LogoCloud</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/Map">Map</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/Scoreboard">Scoreboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/SelfieForm">SelfieForm</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/ReadTheLetter">ReadTheLetter</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/PrintTheLetter">PrintTheLetter</nuxt-link>
            </li>
          </ul>
          <h2 class="sml-push-y2">Modals</h2>
          <ul>
            <li>
              <nuxt-link to="/styleguide/ArchivedModal">ArchivedModal</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/CallFormModal">CallFormModal</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/styleguide/CallScriptModal">CallScriptModal</nuxt-link>
            </li>
          </ul>
        </div> <!-- #menu -->
      </div> <!-- .c.menu-wrapper -->
    </header>

    <div class="site-content">
      <section class="sml-pad-y5">
        <div class="wrapper">
          <h1>{{ componentName }}</h1>

          <slot />
        </div> <!-- .wrapper -->
      </section>
    </div> <!-- .site-content -->
  </div>
</template>

<script>
import config from '~/config'

export default {
  head() {
    return {
      titleTemplate: `%s - Styleguide ${this.pageTitle}`
    }
  },

  props: {
    componentName: {
      type: String,
      required: false,
      default: null
    }
  },

  computed: {
    title() { return config.siteTitle },
    pageTitle() { return this.componentName ? `- ${this.componentName}` : '' }
  }
}
</script>
