<template>
<div>
<ul>
  <li v-for="(item,index) in items">
    {{parentMessage}}-{{index}}-{{item.message}}
  </li>
</ul>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  items: Object[] = [{ message: "Foo" }, { message: "Bar" }];
  parentMessage: String = "Parent";
}
</script>
