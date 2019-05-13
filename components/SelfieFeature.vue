<i18n src="~/locales/global.yml"></i18n>

<template>
  <div v-if="selfie" class="text-center">
    <div class="selfie-wrapper">
      <img v-if="selfie.photo"
           :src="selfie.photo"
           :alt="`${selfie.name}`"
           class="grid-center">
    </div> <!-- .selfie-wrapper -->
    <blockquote v-if="selfie.comment" class="sml-push-y1">
      {{ selfie.comment }}
    </blockquote>
    <p v-if="selfie.name" class="sml-push-y-half">
      <strong>
        <a v-if="selfie.website" :href="selfie.website" target="_blank">
          {{ selfie.name }}</a>
        <span v-if="!selfie.website">{{ selfie.name }}</span>
        <span v-if="selfie.description">, {{ selfie.description }}</span>
        <span v-if="selfie.location">
          {{ $t('global.common.from') }} {{ selfie.location }}
        </span>
      </strong>
    </p>
  </div> <!-- v-if -->
</template>

<script>
export default {
  props: {
    selfie: {
      type: Object,
      required: true
    }
  }
}
</script>
