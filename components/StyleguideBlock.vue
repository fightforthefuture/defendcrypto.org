<style lang="scss" scoped>
.styleguide-class-tag {
  padding: 2px 5px;
  background: $white;
  border: 1px solid $grey-color;
  border-radius: $default-border-radius;
  color: $grey-dark-color;
  font-family: monospace;
}
</style>

<template>
  <div>
    <h2 v-if="title"
        :id="title.toLowerCase().replace(/[\W_]+/g, '')"
        class="sml-push-y2 med-push-y4">
      {{ title }}
    </h2>
    <StyleguideExample>
      <div v-if="classes">
        <div v-for="(c, index) in classes"
             :key="`type-class-${c}`"
             class="sml-pad-y2"
             :class="{ 'with-border-bottom': index < classes.length-1 }">
          <p>
            <span class="styleguide-class-tag"
                  v-text="c ? `.${c.replace(' ', '.')}` : 'Default'">
            </span>
          </p>
          <div class="sml-push-y-half">
            <slot name="elem" :c="c" />
          </div> <!-- .push -->
        </div> <!-- .with-border -->
      </div> <!-- v-if -->
      <slot v-else />
    </StyleguideExample>
  </div>
</template>

<script>
import StyleguideExample from '~/components/StyleguideExample'

export default {
  components: {
    StyleguideExample
  },

  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    classes: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>
