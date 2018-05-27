<template>
  <div>
    <span v-for="n in 10">{{n}}</span>
    <br>
    <ul>
      <template v-for="item in items">
        <li>{{item.msg}}</li>
        <li class="divider">{{item.msg}}</li>
      </template>
    </ul>
    <br>
    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{todo.task}}
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  items: Object[] = [{ msg: 'aaaa' }, { msg: 'bbb' }]
  todos: Object[] = [
    {
      task: 'AAA',
      isComplete: true
    },
    {
      task: 'BBBB',
      isComplete: false
    },
    {
      task: 'CCC',
      isComplete: false
    }
  ]
}
</script>

<style scoped>
.divider {
  color: #f00;
}
</style>
