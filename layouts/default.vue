<i18n src="~/locales/global.yml"></i18n>

<template>
  <div>
    <nuxt />

    <Modal>
      <CallFormModal v-if="modalType === 'call-form'" />
      <CallScriptModal v-if="modalType === 'call-script'" />
      <SelfieModal v-if="modalType === 'selfie'" :selfie="modalData" />
      <ArchivedModal v-if="modalType === 'archived'" />
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { createMetaTags } from '~/assets/js/helpers'
import Modal from '~/components/Modal'
import CallFormModal from '~/components/CallFormModal'
import CallScriptModal from '~/components/CallScriptModal'
import SelfieModal from '~/components/SelfieModal'
import ArchivedModal from '~/components/ArchivedModal'

export default {
  components: {
    Modal,
    CallFormModal,
    CallScriptModal,
    SelfieModal,
    ArchivedModal
  },

  head() {
    return {
      title: this.$t('global.site_title'),
      meta: createMetaTags({
        siteName: this.$t('global.site_title'),
        title: this.$t('global.sharing.title'),
        description: this.$t('global.sharing.description'),
        image: this.$t('global.sharing.image'),
        url: this.$t('global.sharing.url')
      })
    }
  },

  computed: {
    ...mapState(['modalType', 'modalData'])
  }
}
</script>
