<template>
<div>
  <p>Message: {{msg}}</p>
  <p v-once>This will never change: {{msg}}</p>
  <button @click="msg=msg + 'a'">change</button>
  <br>
  <p>Using mastaches:{{rawHtml}}</p>
  <p>Using v-html directive:<span v-html="rawHtml"></span></p>
  <p v-bind:id="dynamicId">dynamicId</p>
  <button @click="dynamicId=dynamicId + 'a'">change</button>
  <br>
  <button v-bind:disabled="isButtonDisabled">Button</button>
  <button @click="isButtonDisabled=!isButtonDisabled">change</button>
  <br>
  {{number +1}}
  <br>
  {{ok?"YES":"NO"}}
  <button @click="ok=!ok">change</button>
  <br>
  {{message.split('').reverse().join('')}}
  <div v-bind:id="'list-' +id"></div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  msg: string = "Message";
  rawHtml: string = "<span style='color:red'>This should be red</span>";
  dynamicId: string = "Dynamic ID";
  isButtonDisabled: boolean = true;
  number: number = 1;
  ok: boolean = true;
  message: string = "Message";
  id: string = "This is id";
}
</script>
