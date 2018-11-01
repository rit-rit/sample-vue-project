<template>
  <div>
    <h1>v-bind Shorthand</h1>
    <a v-bind:href="url">URL</a>
    <button @click="url=url+'A'">Change</button>
    <h1>v-on Shorthand</h1>
    <form v-on:submit.prevent="onSubmit">aaaaa
      <button type="submit" @click="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  url: string = "AAAA";
}
</script>
