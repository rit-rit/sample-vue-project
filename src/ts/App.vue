<template>
<div>
  <p>{{a}}</p>
  <button @click="a='updated'">Update</button>
  <button @click="$destroy()">Destroy</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      a: 1
    };
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
    console.log("a is: " + this.a);
    console.log("has el:" + this.$el);
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("el:" + this.$el);
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("Before Destroy");
  },
  destroyed() {
    console.log("Destroyed");
  }
});
</script>
