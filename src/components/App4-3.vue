<template>
<div>
<p>WatchedFullName:{{watchedFullName}}</p>
WatchedFirstName: <input v-model="watchedFirstName">
<br>
WatchedLastName: <input v-model="watchedLastName">
<p>ComputedFullName:{{computedFullName}}</p>
ComputedfirstName: <input v-model="computedFirstName">
<br>
ComputedlastName: <input v-model="computedLastName">

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  watchedFirstName: string = 'Foo';
  watchedLastName: string = 'Bar';
  watchedFullName: string = 'Foo Bar';
  computedFirstName: string = 'Foo';
  computedLastName: string = 'Bar';

  @Watch('watchedFirstName')
  updateFirstName(val: string) {
    this.watchedFullName = val + ' ' + this.watchedLastName;
  }
  @Watch('watchedLastName')
  updateLastName(val: string) {
    this.watchedFullName = this.watchedFirstName + ' ' + val;
  }
  get computedFullName(): String {
    return this.computedFirstName + ' ' + this.computedLastName;
  }
}
</script>
