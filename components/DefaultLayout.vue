<template>
  <div>
    <slot />

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    PageFooter
  }
}
</script>
