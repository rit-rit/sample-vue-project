<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <button @click="show = !show">Toggle</button>
    <transition name="custom-classes-transition" emter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p v-if="show">hello</p>
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