<template>
<div><span v-bind:title="message">
  Hover your mouse over me for a few second s to see my dynamically bound title!</span>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { message: "You loaded thid page on " + new Date().toString() };
  }
});
</script>
