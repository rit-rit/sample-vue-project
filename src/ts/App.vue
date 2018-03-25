<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class"
>
<p v-if="show">Hello</p>
</transition>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class App extends Vue {
  show: boolean = true;
}
</script>

<style>
.custom-appear-class {
  transition: all 0.3s ease;
}
.custom-appear-to-class {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.custom-appear-active-class {
  transform: translateX(10px);
  opacity: 0;
}
</style>
