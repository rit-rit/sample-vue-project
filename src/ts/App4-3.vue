<template>
<div>
<p>WatchedFullName:{{watchedFullName}}</p>
WatchedFirstName: <input v-model="watchedFirstName">
<br>
WatchedLastName: <input v-model="watchedLastName">
<p>ComputedFullName:{{computedFullName}}</p>
ComputedfirstName: <input v-model="computedFirstName">
<br>
ComputedlastName: <input v-model="computedLastName">

</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      watchedFirstName: "Foo",
      watchedLastName: "Bar",
      watchedFullName: "Foo Bar",
      computedFirstName: "Foo",
      computedLastName: "Bar"
    };
  },
  watch: {
    firstName(val) {
      this.watchedFullName = val + " " + this.watchedLastName;
    },
    lastName(val) {
      this.watchedFullName = this.watchedFirstName + " " + val;
    }
  },
  computed: {
    computedFullName(): String {
      return this.computedFirstName + " " + this.computedLastName;
    }
  }
});
</script>
