<template>
  <div>
    <h1 v-show="ok">V-Show</h1>
    <h1>Normal Show</h1>
    <br>
    <button @click="toggle">Toggle login Type</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  ok: boolean = true

  toggle(): void {
    this.ok = !this.ok
  }
}
</script>
