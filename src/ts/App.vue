<template>
<div>
<p>Original message: "{{message}}"</p>
<p>Cumputed reversed message:"{{reversedMessage}}"</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "Hello"
    };
  },
  computed: {
    reversedMessage(): String {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
</script>
