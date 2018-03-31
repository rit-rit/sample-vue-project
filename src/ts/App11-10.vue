<template>
<div id="list-complete-demo" class="demo">
  <button v-on:click="shuffle">Shuffle</button>
  <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
  <transition-group name="list-complete" tag="p">
    <span
      v-for="item in items"
      v-bind:key="item"
      class="list-complete-item"
    >
      {{ item }}
    </span>
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
  nextNum: number = 10;
  add(): void {
    this.items.splice(this.randomIndex(), 0, this.nextNum++);
  }

  randomIndex(): number {
    return Math.floor(Math.random() * this.items.length);
  }

  remove(): void {
    this.items.splice(this.randomIndex(), 1);
  }
  shuffle(): void {
    this.items = lodash.shuffle(this.items);
  }
}
</script>

<style>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
