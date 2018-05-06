<template>
<div>
  <span v-if="seen">Now you see me</span>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  seen: boolean = true;
}
</script>
