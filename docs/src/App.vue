<template>
  <div id="app"
    class="container">
    <div class="row">
      <h1 class="six columns offset-by-three text-center">
        Vue
        <b>InfoCard</b>
      </h1>
    </div>
    <div class="row">
      <div class="six columns offset-by-three">
        <demo-card></demo-card>
      </div>
    </div>
    <div class="row">
      <div class="six columns offset-by-three m-t-60">
        <code-sample></code-sample>
      </div>
    </div>
    <div class="row">
      <div class="six columns offset-by-three">
        <h3>Installation</h3>
        <code>npm install --save vue-info-card</code>
      </div>
    </div>
    <div class="row">
      <div class="six columns offset-by-three text-center m-t-60">
        <a href="https://github.com/karakanb/vue-info-card">Source and docs can be found on GitHub.</a>
      </div>
    </div>
  </div>
</template>

<script>
import DemoCard from './components/DemoCard';
import CodeSample from './components/CodeSample';

export default {
  name: 'app',
  components: {
    DemoCard,
    CodeSample,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

.text-center {
  text-align: center;
}

.m-t-60 {
  margin-top: 60px;
}
</style>
