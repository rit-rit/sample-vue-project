<template>
<div>
<p>Computed now: "{{now}}"</p>
<p>Method now:"{{methodnow()}}"</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class App extends Vue {
  message: string = 'Hello';

  get now(): String {
    return Date.now().toString();
  }
  methodnow(): String {
    return Date.now().toString();
  }
}
</script>
