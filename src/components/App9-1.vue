<template>
  <div>
    <input type="radio" v-model="picked" value="a">
    <span>{{picked}}</span>
    <br>
    <input type="checkbox" v-model="toggle">
    <span>{{toggle}}</span>
    <br>
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>
    <span>{{selected}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class App extends Vue {
  picked: string = ''
  toggle: boolean = false
  selected: string = ''
}
</script>

