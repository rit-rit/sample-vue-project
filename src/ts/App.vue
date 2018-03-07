<template>
<div>
  <h1>Basic</h1>
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
  <h1>Bind value to property</h1>
  <h2>Checkbox</h2>
  <input type="checkbox" v-model="toggle2" true-value="yes" false-value="no">
  <span>toggle==="yes":{{toggle2==="yes"}}</span>
  <h2>Radio</h2>
  <input type="radio" v-model="pick" v-bind:value="a">
  <label>a</label>
  <input type="radio" v-model="pick" v-bind:value="b">
  <label>b</label>
  <br>
  <span>pick===a:{{pick===a}}</span>

  <h2>Select Option</h2>
  <select v-model="selected2">
    <option v-bind:value="{number:123}">123</option>
    <option v-bind:value="{number:456}">456</option>
  </select> 
  <br>
  <span>typeof selected2:{{typeof selected2}}</span>
  <br>
  <span>selected.number:{{selected2.number}}</span>


</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  picked: string = "";
  toggle: boolean = false;
  selected: string = "";

  toggle2: boolean = false;
  pick: boolean = false;
  a: boolean = false;
  selected2: object = {};
}
</script>

