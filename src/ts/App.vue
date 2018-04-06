<template>
<div>
  <input v-model.number="firstNumber" type="number" step="20">+
  <input v-model.number="secondNumber" type="number" step="20">=
  {{result}}
  <p>
    <animated-integer v-bind:value="firstNumber"></animated-integer>+
    <animated-integer v-bind:value="secondNumber"></animated-integer>=
    <animated-integer v-bind:value="result"></animated-integer>
  </p>
</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import AnimatedInteger from "./App12-3-Child.vue";
import Vue from "vue";
import { TweenLite } from "gsap";
@Component({
  components: { animatedInteger: AnimatedInteger }
})
export default class App extends Vue {
  firstNumber: number = 20;
  secondNumber: number = 40;

  get result(): number {
    return this.firstNumber + this.secondNumber;
  }
}
</script>