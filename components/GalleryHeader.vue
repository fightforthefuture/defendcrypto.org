<i18n src="~/locales/components/GalleryHeader.yml"></i18n>

<template>
  <header class="page-header">
    <div class="wrapper">
      <div class="row">
        <div class="sml-c6 med-c8">
          <nuxt-link :to="localePath('index')">
            <Logo />
          </nuxt-link>
        </div> <!-- .c -->
        <div class="sml-c6 med-c4">
          <div class="flex-grid sml-flex-row sml-push-y-half">
            <p class="text-meta text-right sml-hide lrg-show">
              <strong>{{ $t('filter_by_state') }}</strong>
            </p>
            <form>
              <select v-model="selectedState" @change="updateSelectedState()">
                <option :value="null">
                  {{ $t('show_all_states') }}
                </option>
                <option v-for="(name, code) in states" :key="code" :value="code">
                  {{ name }}
                </option>
              </select>
            </form>
          </div> <!-- .flex-grid -->
        </div> <!-- .c -->
      </div> <!-- .row -->
    </div> <!-- .wrapper -->
  </header>
</template>

<script>
import US_STATES from '~/assets/data/states.json'
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },

  data() {
    return {
      selectedState: null
    }
  },

  computed: {
    states() { return US_STATES }
  },

  async created() { // eslint-disable-line require-await
    // Fetch selfies (optionally via `/?state=XX` in url query param)
    const state = this.$route.query.state ? this.$route.query.state.toUpperCase() : null

    if (state && US_STATES[state]) {
      this.selectedState = state
    }

    this.fetchSelfies()
  },

  methods: {
    fetchSelfies() {
      if (this.selectedState) {
        this.$store.dispatch('getSelfies', { state: this.selectedState.toLowerCase() })
      } else {
        this.$store.dispatch('getSelfies', { page: 1 })
      }
    },

    updateSelectedState() {
      this.$router.replace({
        path: this.$route.path,
        query: {
          state: (this.selectedState || undefined)
        }
      })
      this.fetchSelfies()
    }
  }
}
</script>
