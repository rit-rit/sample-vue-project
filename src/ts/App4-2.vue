<template>
<div>
<p>Computed now: "{{now}}"</p>
<p>Method now:"{{methodnow()}}"</p>
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
    now(): String {
      return Date.now().toString();
    }
  },
  methods: {
    methodnow(): String {
      return Date.now().toString();
    }
  }
});
</script>
