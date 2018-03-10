<template>
<div>
  <h1>App</h1>
  <span>{{message}}</span>
  <input v-model="message">
  <br>
  <child :val="message"></child>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Child from "./Child.vue";
@Component({
  components: {
    child: Child
  }
})
export default class App extends Vue {
  message: string = "hello";
}
</script>

