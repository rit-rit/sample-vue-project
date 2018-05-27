<template>
  <div>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <button @click="reverse">Reverse</button>
    <br>
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  ok: boolean = true

  reverse(): void {
    this.ok = !this.ok
  }
}
</script>

