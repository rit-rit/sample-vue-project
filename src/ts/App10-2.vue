<template>
<div>
  <div>
    <p>{{total}}</p>
    <buttoncounter v-on:increment="incrementTotal"></buttoncounter>
    <buttoncounter v-on:increment="incrementTotal"></buttoncounter>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ButtonCounter from "./button-counter.vue";
@Component({
  components: {
    buttoncounter: ButtonCounter
  }
})
export default class App extends Vue {
  total: number = 0;
  incrementTotal(): void {
    this.total++;
  }
}
</script>

