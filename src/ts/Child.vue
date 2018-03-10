<template>
<div>
  <h1>Child</h1>
  <span>val:{{val}}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    val: String
  }
})
export default class Child extends Vue {}
</script>

