<template>
<div>
  <h1 v-if="value==0">0</h1>
  <h1 v-else-if="value==1">1</h1>
  <h1 v-else>2</h1>
  <button @click="transit">Transit</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  value: number = 0;

  transit(): void {
    this.value != 2 ? (this.value = this.value + 1) : (this.value = 0);
  }
}
</script>

