<template>
<span>{{tweeningValue}}</span>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
import Vue from "vue";
import * as TWEEN from "@tweenjs/tween.js";
@Component
export default class AnimatedInteger extends Vue {
  @Prop() value: Number;
  tweeningValue: number = 0;

  @Watch("value")
  updateValue(newValue: Number, oldValue: Number): void {
    this.tween(oldValue, newValue);
  }

  mounted() {
    this.tween(0, this.value);
  }
  tween(startValue: Number, endValue: Number): void {
    var vm: this = this;
    function animate() {
      if (TWEEN.update()) {
        requestAnimationFrame(animate);
      }
    }
    new TWEEN.Tween({ tweeningValue: startValue })
      .to({ tweeningValue: endValue }, 500)
      .onUpdate(function(object) {
        vm.tweeningValue = object.tweeningValue.toFixed(0);
      })
      .start();
    animate();
  }
}
</script>