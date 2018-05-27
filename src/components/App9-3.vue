<template>
  <div>
    <h1>.lazy</h1>
    <input v-model.lazy="msg">
    <span>{{msg}}</span>
    <h1>.number</h1>
    <input v-model.number="age" type="number">
    <span>typeof age: {{typeof age}},{{age}}</span>
    <h1>.trim</h1>
    <input v-model.trim="msg2">
    <span>{{msg2}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  msg: string = ''
  age: number = 0
  msg2: string = ''
}
</script>

