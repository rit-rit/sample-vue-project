<template>
  <div>
    <input type="radio" id="A" value="v-a" v-model="view"><label>A</label>
    <input type="radio"  id="B" value="v-b" v-model="view"><label>B</label>
    <transition name="slide-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  components: {
    "v-a": { template: "<div>Component A</div>" },
    "v-b": { template: "<div>Component B</div>" }
  }
})
export default class App extends Vue {
  view: string = "v-a";
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
