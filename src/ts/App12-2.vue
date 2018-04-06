<template>
<div>
  <svg width="200" height="200">
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="90"></circle>
  </svg>
  <label>Sides: {{sides}}</label>
  <input type="range" min="3" max="500" v-model.number="sides">
  <label>Minimum Radius: {{minRadius}}%</label>
  <input type="range" min="0" max="90" v-model.number="minRadius">
  <label>Update Interval: {{updateInterval}} milliseconds</label>
  <input type="range" min="10" max="2000" v-model.number="updateInterval">
</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import Vue from "vue";
import { TweenLite } from "gsap";
@Component
export default class App extends Vue {
  defaultSides: number = 10;
  stats: Array<number> = Array.apply(null, { length: this.defaultSides }).map(
    function() {
      return 100;
    }
  );
  points: any = this.generatePoints(this.stats);
  sides: number = this.defaultSides;
  minRadius: number = 50;
  interval: any = null;
  updateInterval: number = 500;

  @Watch("sides")
  updateSides(newSides: number, oldSides: number): void {
    var sidesDifference: number = newSides - oldSides;
    if (sidesDifference > 0) {
      for (var i: number = 1; i <= sidesDifference; i++) {
        this.stats.push(this.newRandomValue());
      }
    } else {
      var absoluteSidesDifference: number = Math.abs(sidesDifference);
      for (var i: number = 1; i <= absoluteSidesDifference; i++) {
        this.stats.shift();
      }
    }
  }
  @Watch("stats")
  updateStats(newStats: Array<number>): void {
    TweenLite.to(this.$data, this.updateInterval / 1000, {
      points: this.generatePoints(newStats)
    });
  }
  @Watch("updateInterval")
  updateUpdateInterval(): void {
    this.resetInterval();
  }

  mounted() {
    this.resetInterval();
  }

  randomizeStats(): void {
    var vm: this = this;
    this.stats = this.stats.map(function() {
      return vm.newRandomValue();
    });
  }
  newRandomValue(): number {
    return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius));
  }

  resetInterval(): void {
    var vm: this = this;
    clearInterval(this.interval);
    this.randomizeStats();
    this.interval = setInterval(function() {
      vm.randomizeStats();
    }, this.updateInterval);
  }

  valueToPoint(
    value: number,
    index: number,
    total: number
  ): { [key: string]: number } {
    var x: number = 0;
    var y: number = -value * 0.9;
    var angle: number = Math.PI * 2 / total * index;
    var cos: number = Math.cos(angle);
    var sin: number = Math.sin(angle);
    var tx: number = x * cos - y * sin + 100;
    var ty: number = x * sin + y * cos + 100;
    return { x: tx, y: ty };
  }

  generatePoints(stats: Array<number>): string {
    var vm: this = this;
    var total = stats.length;
    return stats
      .map(function(stat, index) {
        var point = vm.valueToPoint(stat, index, total);
        return point.x + "," + point.y;
      })
      .join(" ");
  }
}
</script>

<style>
svg {
  display: block;
}
polygon {
  fill: #31b883;
}
circle {
  fill: transparent;
  stroke: #35495e;
}
input[tyoe="range"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>
