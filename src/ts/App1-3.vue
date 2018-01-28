<template>
<div>
  <span v-if="seen">Now you see me</span>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { seen: true };
  }
});
</script>
