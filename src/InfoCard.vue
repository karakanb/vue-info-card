<template>
  <div class="flip-container"
    ontouchstart="this.classList.toggle('hover');">
    <div class="flipper">
      <div class="front">
        <card-content :type="frontType"
          :title="frontTitle"
          :data="frontData"
          :gradients="frontTrendGradients"></card-content>
      </div>
      <div class="back">
        <card-content :type="backType"
          :title="backTitle"
          :data="backData"
          :gradients="backTrendGradients"></card-content>
      </div>
    </div>
  </div>
</template>

<script>
import CardContent from './InfoCardContent.vue';

export default {
  name: 'VueInfoCard',
  components: {
    CardContent,
  },
  props: ['frontType', 'frontTitle', 'frontData', 'frontTrendGradients',
    'backType', 'backTitle', 'backData', 'backTrendGradients',
  ],
};
</script>

<style type='text/css' scoped>

.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}

.flip-container:hover .flipper,
.flip-container.hover .flipper {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flip-container {
  height: 180px;
}

.front,
.back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
}

.flipper {
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;

  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;

  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;

  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
}

.back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>
