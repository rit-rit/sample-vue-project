<template>
<div>
  <input v-model="colorQuery" @keyup.enter="updateColor" placeholder="Enter a color">
  <button v-on:click="updateColor">Update</button>
  <p>Preview:</p>
  <span :style="{backgroundColor:tweenedCSSColor}" class="example-7-color-preview"></span>
  <p>{{tweenedCSSColor}}</p>
</div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import color from "color";
import Vue from "vue";
import * as TWEEN from "@tweenjs/tween.js";
@Component
export default class App extends Vue {
  colorQuery: string = "";
  color: color = new color({ red: 0, green: 0, blue: 0, alpha: 0 });
  tweenedColor: color = new color({ red: 0, green: 0, blue: 0, alpha: 0 });

  created() {
    this.tweenedColor = this.color;
  }

  @Watch("color")
  onChange(): void {
    console.log("ONCHANGE START");
    function animate() {
      if (TWEEN.update()) {
        requestAnimationFrame(animate);
      }
    }

    new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();
    animate();
    console.log("ONCHANGE END");
  }

  get tweenedCSSColor(): {} {
    return new color({
      red: this.tweenedColor.red,
      green: this.tweenedColor.green,
      blue: this.tweenedColor.blue,
      alpha: this.tweenedColor.alpha
    });
  }

  updateColor(): void {
    this.color = new color({
      red: this.colorQuery.substring(0, 2),
      blue: this.colorQuery.substring(2, 2),
      green: this.colorQuery.substring(4, 2)
    });
    this.colorQuery = "";
  }
}
</script>

<style>
.example-7-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
