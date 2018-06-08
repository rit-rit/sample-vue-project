<template>
  <div>
    <button @click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import lodash from "lodash";
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class App extends Vue {
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  shuffle(): void {
    this.items = lodash.shuffle(this.items);
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 1s;
}
</style>
