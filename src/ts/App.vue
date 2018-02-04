<template>
<div>
<a v-bind:href="url">URL</a>
<button @click="url=url+'A'">Change</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      url: "AAAA"
    };
  }
});
</script>
