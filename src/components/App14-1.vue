<template>
  <div>
    <input v-focus>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
@Component({
  directives: {
    focus: {
      inserted: function(el: HTMLElement): void {
        el.focus()
      }
    }
  }
})
export default class App extends Vue {}
</script>