# vue-clock-simple

A Vue component that shows a clock.

This isn't particularly useful, it's used as a demo for how to publish Vue components to NPM!

## Installation

```js
npm i --save-dev vue-clock-simple
```

### Browser

Include the script file, then install the component with `Vue.use(VueClock);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-clock.min.js"></script>
<script type="text/javascript">
  Vue.use(VueClock);
</script>
```

### Module

```js
import VueClock from 'vue-clock';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-clock></vue-clock>
```
