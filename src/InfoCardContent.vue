<template>
  <div class="info-card oval-corners with-shadow p-8 text-grey">
    <div class="title grey-background oval-corners p-l-4">{{ title }}</div>
    <div class="body everything-center-aligned p-4">
      <trend v-if="type === 'graph'"
        :data="data"
        :gradient="trendGradients"
        auto-draw
        smooth>
      </trend>
      <p v-else
        v-html="data"></p>
    </div>
  </div>
</template>

<script>
import Trend from 'vuetrend';

export default {
  name: 'InfoCardContent',
  components: {
    Trend,
  },
  props: {
    title: {
      type: String,
      default: 'Default Card Title',
    },
    type: {
      type: String,
      default: 'text',
    },
    data: {
      validator(value) {
        return (value.constructor === Array || typeof value === 'string' || value instanceof String);
      },
    },
    trendGradients: {
      type: Array,
      default: () => ['#4facfe', '#00f2fe'],
    },
  },
};
</script>

<style type="text/css" scoped>
.info-card {
  background-color: #fff;
  font-weight: 100;
  min-height: 128px;
}

.info-card .title {
  position: relative;
  color: #adadad;
  font-weight: bold;
}

.oval-corners {
  border-radius: 5px;
}

.grey-background {
  background-color: #f7f7f7;
}

.text-grey {
  color: #6d6d6d;
}

.with-shadow {
  -webkit-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  -moz-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
}

.p-8 {
  padding: 8px;
}

.p-4 {
  padding: 4px;
}

.p-l-4 {
  padding-left: 4px;
}
</style>
