<template>
<div>
  <h1>Text</h1>
    <input v-model="message1" placeholder="Edit me">
    <p>Message is {{message1}}</p>
  
  <h1>Multiline Text</h1>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{message2}}</p>
  <br>
  <textarea v-model="message2" placeholder="Add multiple lines"></textarea>
  <h1>Checkbox</h1>
  <input type="checkbox" id="checkbox1" v-model="checked1">
  <label for="checkbox1">{{checked1}}</label>
  <h2>Multiple checkboxes</h2>
  <div id="example-3">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names:{{checkedNames}}</span>
  </div>
  <h1>Radio button</h1>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked:{{picked}}</span>
  <h1>Select</h1>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected:{{selected}}</span>
  <h2>Multiple select</h2>
  <select v-model="selected2" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected:{{selected2}}</span>
  <h2>Dynamic options</h2>
  <select v-model="selected3">
    <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.text">
      {{option.text}}
    </option>
  </select>
  <span>Selected:{{selected3}}</span>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  message1: string = "";
  message2: string = "";
  checked1: boolean = true;
  checkedNames: string[] = [];
  picked: string[] = [];
  selected: string = "";
  selected2: string[] = [];
  selected3: string = "A";
  options: object[] = [
    { text: "One", value: "A" },
    { text: "Two", value: "B" },
    { text: "Three", value: "C" }
  ];
}
</script>

