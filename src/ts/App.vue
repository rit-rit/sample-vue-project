<template>
<div>
<li v-for="n in evenNumbers">{{n}}</li>
<br>
<li v-for="n in even(numbers)">{{n}}</li>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  numbers: number[] = [1, 2, 3, 4, 5];

  get evenNumbers(): number[] {
    return this.numbers.filter(function(number) {
      return number % 2 == 0;
    });
  }

  even(): number[] {
    return this.numbers.filter(function(number) {
      return number % 2 == 0;
    });
  }
}
</script>
