<template>
<div>
  <input v-model.number="num" type="number" step="20">
  <p>{{animatedNumber}}</p>
</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { TweenLite } from "gsap";
import Vue from "vue";
@Component
export default class App extends Vue {
  num: number = 0;
  tweenedNumber: number = 0;

  get animatedNumber(): string {
    return this.tweenedNumber.toFixed(0);
  }
  @Watch("num")
  onnumber(newValue: string): void {
    console.log("AA");
    TweenLite.to(this.num, 0.5, { tweenedNumber: newValue });
  }
}
</script>
