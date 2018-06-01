<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="slide-fade">
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
