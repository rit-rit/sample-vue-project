<template>
 <div id="hook-arguments-example" v-demo="{color:'white',text:'hello'}">
 </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { VNode } from "vue/types/vnode";
@Component({
  directives: {
    demo: {
      bind: function(
        el: HTMLElement,
        binding: { [key: string]: any },
        vnode: VNode
      ): void {
        console.log(binding.value.color);
        console.log(binding.value.text);
      }
    }
  }
})
export default class App extends Vue {
  message: string = "hello";
}
</script>