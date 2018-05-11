<template>
<div>
  <p>{{obj.foo}}</p>
  <button @click="obj.foo='baz'">Change</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
var obj = {
  foo: "bar"
};
@Component
export default class App extends Vue {
  a: number = 1;
  obj: {} = obj;

  created() {
    console.log(this.a);
  }
}
Object.freeze(obj);
</script>
