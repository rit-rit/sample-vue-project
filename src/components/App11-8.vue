<template>
  <div>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script lang="ts">
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
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
