<template>
  <div id="hook-arguments-example" v-demo:foo.a.b="message">
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { VNode } from 'vue/types/vnode'
@Component({
  directives: {
    demo: {
      bind: function(
        el: HTMLElement,
        binding: { [key: string]: any },
        vnode: VNode
      ): void {
        var s = JSON.stringify
        el.innerHTML =
          'name:' +
          s(binding.name) +
          '<br>' +
          'value: ' +
          s(binding.value) +
          '<br>' +
          'expression: ' +
          s(binding.expression) +
          '<br>' +
          'argument: ' +
          s(binding.arg) +
          '<br>' +
          'modifiers: ' +
          s(binding.modifiers) +
          '<br>' +
          'vnode keys: ' +
          Object.keys(vnode).join(', ')
      }
    }
  }
})
export default class App extends Vue {
  message: string = 'hello'
}
</script>