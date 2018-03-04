<template>
<div>
  <div v-bind="aaa">{{Date()}}</div>
  <div v-on:click="doThis">
    <a v-on:click="doThis">Simple Do this</a>
  </div>
  <div v-on:click="doThis">
    <a v-on:click.stop="doThis">Stop Do this</a>
  </div>

  <form submit>
    <button action="submit">Simple Submit</button>
  </form>
  <form v-on:submit.prevent>
    <button action="submit">Prevent Submit</button>
  </form>

  <div v-on:click="doThis">
    <a href="#" v-on:click="doThis">Normal Do this</a>
  </div>
  <div v-on:click="doThis">
    <a href="#" v-on:click.stop.prevent="doThis">Stop Prevent Do this</a>
  </div>

  <div v-on:click.capture="doThis">
    <a v-on:click="doThat">Capture doThat</a>
  </div>

  <div v-on:click.self="doThis">
    <a v-on:click="doThat">Self doThat</a>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  doThis(event: Event): void {
    alert("Do this");
  }
  doThat(event: Event): void {
    alert("Do that");
  }
}
</script>

