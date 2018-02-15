<template>
<div>
  <p v-bind:style="[styleObject,styleObject2]">aaaa
  </p>  
  <p v-bind:style="styleObject">aaaa
  </p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  activeColor: String = "red";
  fontSize: String = "30";
  styleObject: Object = { color: "blue", fontSize: "13px" };
  styleObject2: Object = { "background-color": "red" };
}
</script>

