<template>
  <div>
    <PageHeader />

    <slot />

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
