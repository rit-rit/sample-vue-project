<template>
<div>
  <p>{{message}}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Conponent from "vue-class-component";

@Conponent
export default class App extends Vue {
  message: string = "Hello Vue.js!";

  reverseMessage(): void {
    this.message = this.message
      .split("")
      .reverse()
      .join("");
  }
}
</script>
