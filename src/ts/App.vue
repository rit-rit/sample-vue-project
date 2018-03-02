<template>
<div>
  <a v-on:click="doThis">Simple Do this</a>
  <br>
<a v-on:click.stop="doThis">Stop Do this</a>
<br>
<form v-on:submit.prevent="onSubmit"></form>

<a v-on:click.stop="doThat">Stop Do that</a>
<br>
<form v-on:submit.prevent></form>

<div v-on:click.capture="doThis">Capture aaa</div>
<br>
<div v-on:click.self="doThat">Self bbb</div>

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

