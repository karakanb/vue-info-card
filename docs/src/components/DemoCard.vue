<template>
  <info-card id="info-card"
    :frontType="'graph'"
    :frontTitle="front.title"
    :frontData="front.graphData"
    :backTitle="back.title"
    :backData="back.message"/>
</template>

<script>
import InfoCard from 'vue-info-card';

export default {
  name: 'app',
  components: {
    InfoCard,
  },
  data() {
    return {
      front: {
        title: 'Some Rates',
        graphData: [3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      },
      back: {
        title: 'Monthly Summary',
        message: '<i>Do you know why people like violence? It is because it feels good. Humans find violence deeply satisfying. But remove the satisfaction, and the act becomes hollow.</i><br><span class="u-pull-right">— Alan Turing</span>',
      },
    };
  },
};
</script>

<style>

</style>
