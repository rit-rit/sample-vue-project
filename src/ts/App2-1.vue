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
      a: 1
    };
  },
  created() {
    console.log(this.a);
  }
});
Object.freeze(obj);
</script>
