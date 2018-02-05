<template>
<div>
<a v-bind:href="url">URL</a>
<button @click="url=url+'A'">Change</button>
<br>
<form v-on:submit.prevent="onSubmit">aaaaa
  <button type="submit" @click="submit">submit</button>
</form>
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
