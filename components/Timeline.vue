<i18n src="~/locales/components/Timeline.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss" scoped>
$spacer: $gutter * 6;
$padding: $gutter * 1.5;

ul {
  width: 600px;
  max-width: 96%;
  min-width: 300px;
  margin: 0px auto;
}

li {
  width: 50%;
  position: relative;

  .divider {
    position: absolute;
    width: 40%;
    border-top: 2px solid $bold-color;

    &:after {
      content:"";
      background: $bold-color;
      position: absolute;
      top: -7.5px;
      left: 0;
      width: 15px;
      height: 15px;
      border-radius: 100%;
    }
  }

  .title {
    padding-top: $padding;
    color: $grey-med-color;
    white-space: nowrap;
  }

  .description {
    line-height: 1.2;
    font-size: 96%;
    min-height: 50px;
  }

  &:nth-child(odd) {
    border-right: 2px solid $bold-color;
    padding-bottom: $spacer;
    padding-right: $padding;
    float: left;
    text-align: right;

    .divider {
      top: 0;
      right: 0;
    }
  }

  &:nth-child(even) {
    float: right;
    padding-top: $spacer;
    padding-left: $padding;

    .divider {
      top: $spacer;
      left: 0;

      &:after {
        left: auto;
        right: 0;
      }
    }
  }

  $magic-number-where-things-break: 540px;

  @include respond-to-max($magic-number-where-things-break) {
    font-size: 78%;

    &:nth-child(odd) {
      padding-right: $padding * .75;
    }

    &:nth-child(even) {
      padding-left: $padding * .75;
    }
  }
}
</style>

<template>
  <ul>
    <li></li>
    <li></li>
    <li v-for="(event, index) in $t('events')" :key="index">
      <div class="divider"></div>
      <div class="title">{{ event.date }}</div>
      <div class="description" v-html="event.description_html"></div>
    </li>
  </ul>
</template>
