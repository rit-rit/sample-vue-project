<template>
<div v-bind:id="rawId|formatId">
  {{message|capitalize}}
</div>
 
</template>

<script lang="ts">
import Component from "vue-class-component";
import Filter from "vue-property-decorator";
import Vue from "vue";
import { VNode } from "vue/types/vnode";
@Component
export default class App extends Vue {
  capitalize: string;

  @Filter("capitalize", true)
  filterCapitalize(value: boolean): string {
    if (!value) return "";
    var str: string = value.toString();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
</script>