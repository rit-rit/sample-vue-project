<template>
  <div>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <button v-on:click="warn('Form cannot be submited yet.',$event)">Say what</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  say(message: string): void {
    alert(message)
  }

  warn(message: string, event: Event): void {
    if (event) event.preventDefault()
    alert(message)
  }
}
</script>

