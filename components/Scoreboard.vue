<i18n src="~/locales/components/Scoreboard.yml"></i18n>

<style lang="scss" scoped>
.politicians {
  text-align: center;
}
.rep {
  display: inline-block;
  margin: $gutter;
}
.rep-link {
  display: block;
  max-width: 100px;
  border: none;
}
</style>

<template>
  <div>
    <ScoreboardForm />
    <no-ssr>
      <div class="politicians sml-push-y2 med-push-y4">
        <div class="flex-grid sml-flex-row">
          <div class="sml-pad-1 fill-warn">{{ $t('against') }}</div>
          <div class="sml-pad-1 fill-success">{{ $t('supports') }}</div>
          <div class="sml-pad-1 fill-grey">{{ $t('no_stance') }}</div>
        </div> <!-- .flex-grid -->

        <select v-model="selectedState" class="sml-push-y2 med-push-y3">
          <option :value="null">{{ $t('select_state') }}</option>
          <option v-for="(name, code) in states" :key="code" :value="code">
            {{ name }}
          </option>
        </select>

        <div v-if="politicians.length > 0" class="fade-in sml-push-y2">
          <div v-for="rep in politicians"
               :key="`rep-${rep.bioguide_id}`"
               class="rep">
            <nuxt-link
                :to="localePath({ name: 'scoreboard-id', params: { id: rep.bioguide_id } })"
                class="rep-link">
              <ScoreboardRep :rep="rep" />
              <div class="btn btn-sml btn-block sml-push-y-half">
                {{ $t('view') }}
              </div>
            </nuxt-link>
          </div> <!-- .rep -->
        </div> <!-- v-if -->
        <div v-else-if="selectedState && !isLoading">
          <h3>{{ $t('no_results') }}</h3>
        </div> <!-- v-else-if -->
        <p class="sml-push-y2 med-push-y3">
          <a href="#TODO" class="btn">{{ $t('view_all') }}</a>
        </p>
      </div> <!-- .politicians -->
    </no-ssr>
  </div>
</template>

<script>
import { geocodeState } from '~/assets/js/helpers'
import US_STATES from '~/assets/data/states.json'
import ScoreboardForm from '~/components/ScoreboardForm'
import ScoreboardRep from '~/components/ScoreboardRep'

export default {
  components: {
    ScoreboardForm,
    ScoreboardRep
  },

  data() {
    return {
      selectedState: null,
      politicians: [],
      isLoading: false
    }
  },

  computed: {
    states() { return US_STATES }
  },

  watch: {
    selectedState(newValue) {
      if (!process.browser) return

      if (newValue) {
        localStorage.selectedState = newValue
        this.fetchPoliticians()
      } else {
        localStorage.removeItem('selectedState')
        this.politicians = []
      }
    }
  },

  async created() {
    if (!process.browser) return

    if (localStorage.selectedState) {
      this.selectedState = localStorage.selectedState
    } else {
      const { abbr } = await geocodeState()
      this.selectedState = abbr
    }
  },

  methods: {
    async fetchPoliticians() {
      this.isLoading = true
      this.politicians = []
      const { data } = await this.$axios.get(`https://data.battleforthenet.com/scoreboard/${this.selectedState.toLowerCase()}.json`)
      this.politicians = data
      this.isLoading = false
    }
  }
}
</script>
