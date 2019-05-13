<template>
  <StyleguideLayout :component-name="title">
    <div v-if="componentInstance">
      <StyleguideExample>
        <component v-if="componentInstance" :is="componentInstance"></component>
      </StyleguideExample>
    </div> <!-- v-if -->
    <p v-else>No styleguide section found</p>
  </StyleguideLayout>
</template>

<script>
import StyleguideLayout from '~/components/StyleguideLayout'
import StyleguideExample from '~/components/StyleguideExample'

export default {
  components: {
    StyleguideLayout,
    StyleguideExample
  },

  head() {
    return {
      titleTemplate: `%s - Styleguide - ${this.id}`
    }
  },

  data() {
    return {
      componentInstance: null
    }
  },

  computed: {
    id() {
      return this.$route.params.id
    },
    title() {
      return `${this.id.charAt(0).toUpperCase()}${this.id.slice(1)}`
    },
    componentLoader() {
      if (!this.id) {
        return null
      }
      return () => import(`~/components/${this.id}`)
    }
  },

  mounted() {
    this.componentLoader().then(() => {
      this.componentInstance = () => this.componentLoader()
    }).catch(() => {
      console.log('No component found')
    })
  }
}
</script>
