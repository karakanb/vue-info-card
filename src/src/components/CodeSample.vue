<template>
  <div>
    <pre><code class="javascript">{{code}}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'CodeSample',
  data() {
    return {
      code: `<info-card
    id="info-card"
    frontType="graph"
    frontTitle="Some Numbers"
    :frontData="[3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    backTitle="Quote of the Day"
    backData='<i>Do you know why people like violence? It is because it feels good. Humans find violence deeply satisfying. But remove the satisfaction, and the act becomes hollow.</i><br><span class="u-pull-right">— Alan Turing</span>'
  ></info-card>`,
    };
  },
};
</script>

<style>
code {
  font-size: 16px;
}
</style>
