<template>
<div>
<button v-on:click="counter+=1">Add 1</button>
<p>The button above has been clicked {{ counter}} times</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  counter: number = 0;
}
</script>

