<template>
<button @click="incrementCounter">{{counter}}</button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class ButtonCounter extends Vue {
  counter: number = 0;
  incrementCounter(): void {
    this.counter++;
    this.$emit("increment");
  }
}
</script>

