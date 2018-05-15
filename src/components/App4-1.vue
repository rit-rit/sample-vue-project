<template>
<div>
<p>Original message: "{{message}}"</p>
<p>Cumputed reversed message:"{{reversedMessage}}"</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class App extends Vue {
  message: string = 'Hello';

  get reversedMessage(): String {
    return this.message
      .split('')
      .reverse()
      .join('');
  }
}
</script>
