<template>
<div>
  <h1>I'm the parent title</h1>
  <simpleSlotSample>
    <p>This is some original content</p>
    <p>This is some more original content</p>
  </simpleSlotSample>
    <h1>I'm the parent title</h1>
  <simpleSlotSample>
  </simpleSlotSample>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SimpleSlotSample from "./SimpleSlotSample.vue";
@Component({
  components: {
    simpleSlotSample: SimpleSlotSample
  }
})
export default class App extends Vue {
  value: string = "";
}
</script>

