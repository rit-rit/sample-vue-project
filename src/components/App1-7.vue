<template>
<div>
  <ol>
    <todo-item
    v-for="item in groceryList"
    v-bind:todo="item"
    v-bind:key="item.id"
    >
    </todo-item>
  </ol>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "../components/todoItem.vue";
import Component from "vue-class-component";
@Component({
  components: {
    todoItem: TodoItem
  }
})
export default class App extends Vue {
  groceryList: {}[] = [
    { id: 0, text: "Vegetables" },
    { id: 1, text: "Cheese" },
    { id: 2, text: "Whatever else humans are supposed to eat" }
  ];
}
</script>
