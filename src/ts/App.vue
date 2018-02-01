<template>
<div>
  <p>{{obj.foo}}</p>
  <button @click="obj.foo='baz'">Change</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
let obj = {
  foo: "bar"
};
export default Vue.extend({
  data() {
    return {
      obj
    };
  }
});

Object.freeze(obj);
</script>
