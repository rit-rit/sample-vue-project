<template>
<div>
<button v-on:click="greet">Greet</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  name: String = "Vue.js";
  greet(event: Event): void {
    alert("Hello " + this.name);
    if (event) {
      alert(event.target);
    }
  }
}
</script>

