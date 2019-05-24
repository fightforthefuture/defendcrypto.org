<i18n src="~/locales/components/Timeline.yml"></i18n>
<i18n src="~/locales/global.yml"></i18n>

<style lang="scss" scoped>
$spacer: $gutter * 6;
$padding: $gutter * 1.5;

ul {
  width: 600px;
  max-width: 96%;
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
  }

  .description {
    line-height: 1.2;
    font-size: 96%;
    min-height: 50px;
  }

  &:nth-child(odd) {
    border-left: 2px solid $bold-color;
    padding-bottom: $spacer;
    padding-left: $padding;
    float: right;

    .divider {
      top: 0;
      left: 0;

      &:after {
        left: auto;
        right: 0;
      }
    }
  }

  &:nth-child(even) {
    float: left;
    padding-top: $spacer;
    padding-right: $padding;
    text-align: right;

    .divider {
      top: $spacer;
      right: 0;
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
