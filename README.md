# vue-info-card

A Vue component that displays a responsive, simple and easy to use information card. It contains a trend graph option, using the amazing (vuetrend)[https://github.com/QingWei-Li/vue-trend] library, and an option for displaying regular text. 

### Browser

Include the script file, then install the component with `Vue.use(VueInfoCard);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-info-card/dist/vue-info-card.min.js"></script>
<script type="text/javascript">
  Vue.use(VueInfoCard);
</script>
```

### Module

```js
import InfoCard from 'vue-info-card';
```

## Usage

After the installation, the component can be used by passing the appropriate props for displaying the data and messages. A sample usage within a single file component is as follows:

```html
<template>
  <div>
    <info-card :frontType="'graph'"
      :frontTitle="graphData.front.title"
      :frontData="graphData.front.graphData"
      :backTitle="graphData.back.title"
      :backData="graphData.back.message"></info-card>
  </div>
</template>

<script>
import InfoCard from 'vue-info-card';

export default {
  components: {
    InfoCard,
  },
  data() {
    return {
      graphData: {
        front: {
          title: 'Daily Conversion Value',
          graphData: [3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        },
        back: {
          title: 'Monthly Summary',
          message: 'Your average daily conversion value for this month is <b>50.4$</b>. It is below the average of the last six months.',
        },
      },
    };
  },
};
</script>
```

### Props

There are basically three different props for each faces of the card. A face requires a type, such as `graph` or `text`, a title, and a data to display in the body of the card. 
The props are as follows:

| prop         | Type                | Is Optional? | Default                | Description                                                                                                                                                  |
|--------------|---------------------|--------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `frontType`  | `String`            | Yes          | `'text'`               | Type of the front face of the card. Available options are `graph` or `text`.                                                                                 |
| `frontTitle` | `String`            | Yes          | `'Default Card Title'` | Title of the front face of the card.                                                                                                                         |
| `frontData`  | `String` or `Array` | No           |                        | Data that will be displayed on the front face of the card. If `frontType` is set to `graph`, this must be an array; otherwise, a string. |
| `backType`   | `String`            | Yes          | `'text'`               | Type of the back face of the card. Available options are `graph` or `text`.                                                                                  |
| `backTitle`  | `String`            | Yes          | `'Default Card Title'` | Title of the back face of the card.                                                                                                                         |
| `backData`   | `String` or `Array` | No           |                        | Data that will be displayed on the back face of the card. If `frontType` is set to `graph`, this must be an array; otherwise, a string. |

Note that both `frontData` and `backData` props accept HTML as input, which means you can inject elements to the card body directly.

## License
The project is under MIT License.