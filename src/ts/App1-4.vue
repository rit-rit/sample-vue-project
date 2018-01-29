<template>
<div>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text}}
    </li>
  </ol>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build somthing awesome" }
      ]
    };
  }
});
</script>
