<template>
<div>
  <appLayout>
    <h1 slot="header">Here might be a page title</h1>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    <p slot="footer">Here's some content info</p>
  </appLayout>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppLayout from "./AppLayout.vue";
@Component({
  components: {
    appLayout: AppLayout
  }
})
export default class App extends Vue {
  value: string = "";
}
</script>

