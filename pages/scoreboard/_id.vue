<i18n src="~/locales/pages/scoreboard_id.yml"></i18n>

<template>
  <DefaultLayout>
    <section id="sign" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <nuxt-link :to="localePath('scoreboard')">{{ $t('back') }}</nuxt-link>
        <div class="row sml-push-y2 med-push-y3">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h1>
              {{ repOrg }} {{ rep.first_name }} {{ rep.last_name }}
              <span v-text="rep.supports_net_neutrality ? $t('supports') : $t('opposes')"
                :class="{
                  'text-success': rep.supports_net_neutrality,
                  'text-warn': !rep.supports_net_neutrality
                }">
              </span>
              {{ $t('net_neutrality') }}
            </h1>
            <ScoreboardRep :rep="rep" class="sml-push-y2 med-push-y3" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout'
import ScoreboardRep from '~/components/ScoreboardRep'

export default {
  components: {
    DefaultLayout,
    ScoreboardRep
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t('page_title')}`
    }
  },

  async asyncData({ $axios, params }) {
    let rep = []
    try {
      const { data } = await $axios.get(`https://data.battleforthenet.com/scoreboard/${params.id}.json`)
      rep = data
    } catch (error) {
      return {}
    }
    return {
      rep: rep
    }
  },

  computed: {
    repOrg() { return this.rep.organization === 'Senate' ? this.$t('senator_abbr') : this.$t('representative_abbr') }
  }
}
</script>
