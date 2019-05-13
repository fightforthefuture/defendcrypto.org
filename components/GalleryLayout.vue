<template>
  <div>
    <GalleryHeader />

    <slot />
  </div>
</template>

<script>
import GalleryHeader from '~/components/GalleryHeader'

export default {
  components: {
    GalleryHeader
  }
}
</script>
