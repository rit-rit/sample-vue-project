<template>
<div>
  <ol>
    <li v-for="todo in todos" :key="todo">
      {{ todo.text}}
    </li>
  </ol>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  todos: {}[] = [
    { text: "Learn JavaScript" },
    { text: "Learn Vue" },
    { text: "Build somthing awesome" }
  ];
}
</script>
