<template>
<div>
  <p>{{message}}</p>
  <input v-model="message">
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  message: string = "Hello Vue.js!";
}
</script>
