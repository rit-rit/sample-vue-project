<template>
<div>
    <input type="text" v-model="message">
    <button @click="handleSendMessage">Send</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MessageEventExample from "./MessageEventExample.vue";
@Component
export default class App extends Vue {
  message: string = "";
  handleSendMessage(): void {
    this.$emit("message", { message: this.message });
  }
}
</script>

