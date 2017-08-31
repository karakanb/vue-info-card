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
  :frontType="front.type"
  :frontTitle="front.title"
  :frontData="front.graphData"
  :backTitle="back.title"
  :backData="back.message"/>`,
    };
  },
};
</script>

<style>
code {
  font-size: 16px;
}
</style>
