<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
