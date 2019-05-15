<style lang="scss" scoped>
.styleguide-color {
  width:  80px;
  height: 80px;
}
.grid-example {
  overflow: hidden;
}
@for $i from 1 through 12 {
  .grid-example .sml-c#{$i},
  .grid-example .med-c#{$i},
  .grid-example .lrg-c#{$i} {
    background: $grey-light-color;
    overflow: hidden;
  }
}
.grid-example p {
  margin-top:    16px;
  margin-bottom: 16px;
  background: $brand-color;
  color: $white;
  line-height: 2;
  text-align: center;
}
.grid-example p {
  font-size: 14px;
}
</style>

<template>
  <StyleguideLayout :component-name="title">
    <StyleguideBlock title="Colors" :classes="colorClasses">
      <template v-slot:elem="{ c }">
        <div :class="c" class="styleguide-color"><!-- empty divs are usually evil --></div>
      </template>
    </StyleguideBlock>

    <StyleguideBlock title="Grid">
      <div class="grid-example">
        <h2>Default Grid Columns</h2>
        <div class="row sml-push-y1">
          <div class="med-hide lrg-c2"><p>med-hide lrg-c2</p></div>
          <div class="sml-c12 lrg-c8"><p>sml-c12 lrg-c8</p></div>
          <div class="med-hide lrg-c2"><p>med-hide lrg-c2</p></div>
        </div> <!-- .row -->

        <h2 class="sml-push-y4">Centered Grid Column</h2>
        <div class="row sml-push-y1">
          <div class="sml-c12 lrg-c8 grid-center">
            <p>sml-c12 lrg-c8 grid-center</p>
          </div> <!-- .c -->
        </div> <!-- .row -->

        <h2 class="sml-push-y4">
          Large: 2/3 and 1/3, Medium: 1/2 and 1/2, Small: full-width (optional sticky footer)
        </h2>
        <div class="row sml-push-y1">
          <div class="sml-c12 med-c6 lrg-c8"><p>sml-c12 med-c6 lrg-c8</p></div>
          <div class="sml-c12 med-c6 lrg-c4"><p>sml-c12 med-c6 lrg-c4</p></div>
        </div> <!-- .row -->

        <h2 class="sml-push-y4">
          Reponsive row overrides with sml-, med-, and lrg- classes
        </h2>
        <div class="row sml-push-y1">
          <div class="sml-c6 lrg-c2"><p>sml-c6 lrg-c2</p></div>
          <div class="sml-c6 lrg-c10"><p>sml-c6 lrg-c10</p></div>
        </div> <!-- .row -->
        <div class="row sml-push-y1">
          <div class="sml-c6 lrg-c4"><p>sml-c6 lrg-c4</p></div>
          <div class="sml-c6 lrg-c4"><p>sml-c6 lrg-c4</p></div>
          <div class="sml-c12 lrg-c4"><p>sml-c12 lrg-c4</p></div>
        </div> <!-- .row -->

        <div class="row sml-push-y1">
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
          <div class="sml-c6 med-c4 lrg-c2"><p>sml-c6 med-c4 lrg-c2</p></div>
        </div> <!-- .row -->

        <h2 class="sml-push-y4">Nesting Columns in Columns. Make sure to use rows!</h2>
        <div class="row sml-push-y1">
          <div class="sml-c12 lrg-c6">
            <div class="row">
              <div class="sml-c6"><p>sml-c6</p></div>
              <div class="sml-c6"><p>sml-c6</p></div>
            </div> <!-- .row -->
            <div class="row">
              <div class="sml-c6"><p>sml-c6</p></div>
              <div class="sml-c6"><p>sml-c6</p></div>
            </div> <!-- .row -->
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .grid-example -->
    </StyleguideBlock>

    <StyleguideBlock title="Headings">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </StyleguideBlock>

    <StyleguideBlock title="Typography" :classes="typographyClasses">
      <template v-slot:elem="{ c }">
        <p :class="c">
          This is some text <strong>in bold</strong> and <em>emphasized</em>,
          <a href="#">with a link</a>.
        </p>
      </template>
    </StyleguideBlock>

    <h2 id="spacing" class="sml-push-y2 med-push-y4">Spacing</h2>
    <p class="sml-push-y2">
      <strong class="text-brand">NOTE:</strong> There are more options than
      those presented here. Please see: <code>_spacing.scss</code>.
    </p>
    <StyleguideBlock title="Spacing - Padding" :classes="paddingClasses">
      <template v-slot:elem="{ c }">
        <div :class="c" class="fill-white with-border">
          Element with <strong>padding</strong>
        </div>
      </template>
    </StyleguideBlock>

    <StyleguideBlock title="Spacing - Margin" :classes="marginClasses">
      <template v-slot:elem="{ c }">
        <div :class="c" class="fill-white with-border sml-pad-1">
          Element with <strong>margin</strong>
        </div>
      </template>
    </StyleguideBlock>

    <h2 id="modifiers" class="sml-push-y2 med-push-y4">Modifiers</h2>
    <p class="sml-push-y2">
      <strong class="text-brand">NOTE:</strong> There are more options than
      those presented here. Please see: <code>_modifiers.scss</code>.
    </p>
    <StyleguideBlock :classes="modifierClasses">
      <template v-slot:elem="{ c }">
        <div :class="c" class="sml-pad-2">Element with modifier</div>
      </template>
    </StyleguideBlock>

    <StyleguideBlock title="Buttons" :classes="buttonClasses">
      <template v-slot:elem="{ c }">
        <a class="btn" :class="c">Button Link</a>
        <button class="btn" :class="c">Button</button>
      </template>
    </StyleguideBlock>

    <StyleguideBlock title="Forms">
      <form>
        <div>
          <label>Label</label>
          <input type="text" value="Text input">
        </div>
        <div class="sml-push-y2">
          <label>Label</label>
          <input type="text" placeholder="Placeholder text">
        </div>
        <div class="sml-push-y2">
          <label>Inverted style field</label>
          <input type="text" placeholder="Placeholder text" class="input-inverted">
        </div>
        <div class="sml-push-y2">
          <label>Label</label>
          <textarea>Textarea</textarea>
        </div>
        <div class="row">
          <div class="sml-c12 med-c6 sml-push-y2">
            <label>Label</label>
            <input type="text" placeholder="Placeholder text">
          </div> <!-- .c -->
          <div class="sml-c12 med-c6 sml-push-y2">
            <label>Label</label>
            <input type="text" placeholder="Placeholder text">
          </div> <!-- .c -->
        </div> <!-- .row -->
        <div class="sml-push-y2">
          <label>Label</label>
          <input type="text" value="Error Field" class="error">
        </div>
        <div class="sml-push-y2">
          <label>Label</label>
          <textarea class="error">Textarea</textarea>
        </div>
        <div class="sml-push-y2">
          <label>Dropdown menu</label>
          <div class="select">
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div> <!-- .select -->
        </div>
        <div class="checkbox sml-push-y2">
          <input id="checkbox-1" type="checkbox">
          <label for="checkbox-1">Checkbox label</label>
        </div>
        <div class="radio sml-push-y2">
          <input id="radio-1" type="radio" name="radio-example">
          <label for="radio-1">Radio label 1</label>
        </div>
        <div class="radio sml-push-y2">
          <input id="radio-2" type="radio" name="radio-example">
          <label for="radio-2">Radio label 2</label>
        </div>
        <div class="sml-push-y2 flex-grid sml-flex-row">
          <div class="faux-btn">
            <input id="radio-button-yes" type="radio" name="radio-button">
            <label for="radio-button-yes">Radio button: yes</label>
          </div> <!-- .faux-btn -->
          <div class="faux-btn">
            <input id="radio-button-no" type="radio" name="radio-button">
            <label for="radio-button-no">Radio button: no</label>
          </div> <!-- .faux-btn -->
        </div>
        <div class="sml-push-y2">
          <button type="submit" class="btn block">Submit</button>
        </div> <!-- div.submit -->
      </form>

      <form class="sml-push-y2 sml-pad-y2 with-border-top">
        <label>Form field with inline button</label>
        <div class="row">
          <div class="sml-c8">
            <input type="text">
          </div> <!-- .c -->
          <div class="sml-c4">
            <button type="submit" class="btn btn-block">Submit</button>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </form>
    </StyleguideBlock>

    <StyleguideBlock title="Lists" :classes="listClasses">
      <template v-slot:elem="{ c }">
        <ul :class="c">
          <li>Item 1</li>
          <li><a href="#">Item 2 link</a></li>
          <li>Item 3</li>
        </ul>
      </template>
    </StyleguideBlock>
  </StyleguideLayout>
</template>

<script>
import StyleguideLayout from '~/components/StyleguideLayout'
import StyleguideBlock from '~/components/StyleguideBlock'

export default {
  components: {
    StyleguideLayout,
    StyleguideBlock
  },

  data() {
    return {
      colorClasses: [
        'fill-white',
        'fill-grey-lighter',
        'fill-grey-light',
        'fill-grey-med',
        'fill-grey',
        'fill-grey-dark',
        'fill-grey-darkest',
        'fill-black',
        'fill-brand',
        'fill-brand-light',
        'fill-success',
        'fill-warn'
      ],
      typographyClasses: [
        '',
        'text-loud',
        'text-center',
        'text-right',
        'text-left',
        'text-white',
        'text-meta',
        'text-grey-med',
        'text-grey',
        'text-brand',
        'text-warn',
        'text-success'
      ],
      paddingClasses: [
        '',
        'sml-pad-half',
        'sml-pad-1',
        'sml-pad-2',
        'sml-pad-3',
        'sml-pad-4',
        'sml-pad-x1',
        'sml-pad-x2',
        'sml-pad-y1',
        'sml-pad-y2',
        'sml-pad-y4',
        'sml-pad-y6'
      ],
      marginClasses: [
        '',
        'sml-push-y-half',
        'sml-push-y1',
        'sml-push-y2',
        'sml-push-y3',
        'sml-push-y4',
        'sml-push-y5',
        'sml-push-y6'
      ],
      modifierClasses: [
        '',
        'fill-white',
        'fill-grey-lighter',
        'fill-grey-light',
        'fill-grey',
        'fill-grey-med',
        'fill-grey-dark',
        'fill-grey-darkest',
        'fill-black',
        'fill-brand',
        'fill-success',
        'fill-warn',
        'with-border',
        'with-border-bottom',
        'with-border-top',
        'with-border-left',
        'with-border is-rounded',
        'with-border is-rounded-top',
        'with-border is-rounded-bottom'
      ],
      buttonClasses: [
        '',
        'btn-block',
        'btn-sml',
        'btn-alt',
        'btn-twitter',
        'btn-facebook',
        'btn-disabled'
      ],
      listClasses: [
        '',
        'bullets',
        'numbers',
        'hoz'
      ]
    }
  },

  computed: {
    title() { return 'Base' }
  }
}
</script>
