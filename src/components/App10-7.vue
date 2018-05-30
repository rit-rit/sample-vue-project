<template>
<div>
  <component v-bind:is="currentView"></component>
  <button @click="switchView">Switch</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SampleView1 from "./SampleView1.vue";
import SampleView2 from "./SampleView2.vue";
@Component({
  components: {
    sampleView1: SampleView1,
    sampleView2: SampleView2
  }
})
export default class App extends Vue {
  currentView: any = "sampleView1";
  isView1: boolean = true;
  switchView(): void {
    if (this.isView1) {
      this.isView1 = false;
      this.currentView = "sampleView2";
    } else {
      this.isView1 = true;
      this.currentView = "sampleView1";
    }
  }
}
</script>

